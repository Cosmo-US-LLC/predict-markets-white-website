import clsx from "clsx";
import Modal from "../../ui/modal";
import classes from "./WalletTransferModal.module.css";

import { ClockIcon, AlertCircle as ErrorIcon, XCircle as CancelledIcon, CheckCircleIcon } from "lucide-react";
import { useMemo } from "react";
import { formatNumber, parseNum } from "../../../presale-gg/util";
import Spinner from "../Spinner";
import Input from "../Input";
import FormLabel from "../FormLabel";

/**
 * @typedef {import("../../../presale-gg/util/buy.util").StatusBoxProps} StatusBoxProps
 * @typedef {import("../../../presale-gg/api/api.types").API.PurchaseTransactionHistoryItemV2} PurchaseTransactionHistoryItemV2
 * @typedef {import("../../../presale-gg/api/api.types").API.PaymentToken} PaymentToken
 * @typedef {import("../../ui/modal").ModalProps} ModalProps
 * 
 * @typedef BaseWalletTransferModalProps
 * @property {"sending" | "confirming" | "finalizing" | "finished" | "errored"} BaseWalletTransferModalProps.state
 * @property {PurchaseTransactionHistoryItemV2} BaseWalletTransferModalProps.transaction
 * @property {string | null} BaseWalletTransferModalProps.transactionHash
 * @property {string | null} BaseWalletTransferModalProps.transactionError
 * @property {string} BaseWalletTransferModalProps.payAmount
 * @property {PaymentToken} BaseWalletTransferModalProps.payCurrency
 * 
 * @param {BaseWalletTransferModalProps & Omit<ModalProps, "title">} props
 */
const WalletTransferModal = ({
  state,
  transaction,
  transactionHash,
  transactionError,
  payAmount,
  payCurrency,
  ...others
}) => {
  /** @type {StatusBoxProps["status"][]} */
  const statusBoxes = useMemo(() => {
    const boxes = [];

    /** @type {StatusBoxProps["status"]} */
    let sendStatus;
    if (state === "sending") sendStatus = "in_progress";
    else if (state === "errored") sendStatus = "errored";
    else sendStatus = "completed";

    let sendTitle = "Transaction Sending";
    if (sendStatus === "completed") sendTitle = "Transaction Sent";
    else if (sendStatus === "errored") sendTitle = "Transaction Errored";

    boxes.push({
      status: sendStatus,
      title: sendTitle,
      body:
        sendStatus === "errored" ? transactionError ?? undefined : undefined,
    });

    /** @type {StatusBoxProps["status"]} */
    let confirmStatus
    if (state === "confirming") confirmStatus = "in_progress";
    else if (state === "errored") confirmStatus = "cancelled";
    else if (state === "sending") confirmStatus = "waiting";
    else confirmStatus = "completed";

    let confirmTitle
    if (confirmStatus === "completed") confirmTitle = "Transaction Confirmed";
    else if (confirmStatus === "cancelled")
      confirmTitle = "Confirmation Cancelled";
    else if (confirmStatus === "in_progress")
      confirmTitle = "Confirming Transaction";
    else confirmTitle = "Awaiting Confirmation";

    boxes.push({ status: confirmStatus, title: confirmTitle });

    /** @type {StatusBoxProps["status"]} */
    let completeStatus;
    if (state === "confirming") completeStatus = "waiting";
    else if (state === "errored") completeStatus = "cancelled";
    else if (state === "sending") completeStatus = "waiting";
    else if (state === "finalizing") completeStatus = "in_progress";
    else completeStatus = "completed";

    let completeTitle;
    if (completeStatus === "completed") completeTitle = "Transaction Complete";
    else if (completeStatus === "cancelled")
      completeTitle = "Transaction Cancelled";
    else if (completeStatus === "in_progress")
      completeTitle = "Finalizing Transaction";
    else completeTitle = "Awaiting Completion";

    const completeBody =
      completeStatus === "completed"
        ? `Received ${formatNumber(
          parseNum(transaction?.tokens_bought),
          2,
          4
        )} $PREDICT`
        : undefined;

    boxes.push({
      status: completeStatus,
      title: completeTitle,
      body: completeBody,
    });

    return boxes;
  }, [state, transaction, transactionHash]);

  const hashLoading = !transactionHash && state !== "errored"

  return (
    <Modal {...others} title="Transaction" className="w-[22rem]">
      <div className={classes["label-container"]}>
        <FormLabel label="Transaction Hash">
          <Input
            value={state === "errored" ? "Error" : transactionHash ?? ""}
            readOnly
            noInput={hashLoading}
          >
            {hashLoading ? (
              <div className="flex flex-1 gap-2 items-center px-2 md:px-4">
                <ValueLoader loading />
              </div>
            ) : <></>}
          </Input>
        </FormLabel>
      </div>
      <div className={classes["info-container"]}>
        <p className={classes["info-label"]}>Transaction Summary</p>
        <div className={classes["summary-container"]}>
          <div className={classes["summary-item"]}>
            <p className={classes["summary-label"]}>You Sent</p>
            <p className={classes["summary-value"]}>
              {formatNumber(parseNum(payAmount))}{" "}
              {payCurrency.symbol.toUpperCase()}
            </p>
          </div>
          <div className={classes["summary-item"]}>
            <p className={classes["summary-label"]}>You Received</p>
            <div className={classes["summary-value"]}>
              <ValueLoader
                loading={!transaction && state !== "errored"}
                loadingText="Calculating"
              >
                {state === "errored"
                  ? "Error"
                  : `${formatNumber(
                    parseNum(transaction?.tokens_bought),
                    2,
                    4
                  )} $PREDICT`}
              </ValueLoader>
            </div>
          </div>
          <div className={classes["summary-item"]}>
            <p className={classes["summary-label"]}>Rate</p>
            <div className={classes["summary-value"]}>
              <ValueLoader
                loading={!transaction && state !== "errored"}
                loadingText="Calculating"
              >
                {state === "errored"
                  ? "Error"
                  : `1 ${payCurrency.symbol.toUpperCase()} = ${formatNumber(
                    parseNum(transaction?.tokens_bought) /
                    parseNum(payAmount),
                    2,
                    4
                  )} $PREDICT`}
              </ValueLoader>
            </div>
          </div>
        </div>
      </div>

      <div
        className={clsx(classes["info-container"], classes["status-container"])}
      >
        {statusBoxes.map((box) => (
          <StatusBox {...box} />
        ))}
      </div>
    </Modal>
  );
};

export default WalletTransferModal;

/**
 * @typedef {import("react").ReactNode} ReactNode
 * 
 * @param {object} props
 * @param {boolean} props.loading
 * @param {string} [props.loadingText]
 * @param {ReactNode | ReactNode[]} [props.children]
 */
const ValueLoader = (props) => {
  return (
    <>
      {props.loading ? (
        <>
          {props.loadingText ?? "Loading"} <Spinner size={3} />
        </>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

/**
 * @typedef {object} StatusBoxProps
 * @property {string} StatusBoxProps.title
 * @property {"in_progress" | "completed" | "waiting" | "errored" | "cancelled"} StatusBoxProps.status
 * @property {string} [StatusBoxProps.body]
 * 
 * @param {StatusBoxProps} props
 */
const StatusBox = (props) => {
  return (
    <div
      className={clsx(
        classes["status-box"],
        classes[`status-${props.status.replace("_", "-")}`]
      )}
    >
      <div className={classes["status-icon-container"]}>
        {props.status === "in_progress" && <Spinner size={4} />}
        {props.status === "completed" && <CheckCircleIcon />}
        {props.status === "waiting" && <ClockIcon />}
        {props.status === "errored" && <ErrorIcon />}
        {props.status === "cancelled" && <CancelledIcon />}
      </div>
      <div className={classes["status-text-container"]}>
        <p className={classes["status-title"]}>{props.title}</p>
        <p className={classes["status-status"]}>
          {props.status === "in_progress" && "In Progress..."}
          {props.status === "waiting" && "Waiting"}
          {props.status === "completed" && "Completed"}
          {props.status === "cancelled" && "Cancelled"}
          {props.status === "errored" && !props.body && "Error"}
        </p>
        {props.body && <p className={classes["status-body"]}>{props.body}</p>}
      </div>
    </div>
  );
};
