import { QRCodeCanvas } from "@akamfoad/qrcode";
import clsx from "clsx";
import Modal from "../ui/modal";
import { CheckCircleIcon, ClockIcon, CircleAlert as ErrorIcon } from "lucide-react"
import { useEffect, useMemo, useState } from "react";
import {
  capitalize,
  copyText,
  waitForNextTransaction,
  zeroPad,
} from "../../presale-gg/util";
import { refetchUserData, refetchUserStakeData } from "../../presale-gg/stores";
import { useAccount } from "../../presale-gg/web3";
import FormLabel from "./FormLabel";
import Input from "./Input";

const EXPIRES_IN_MS = 60 * 60 * 1000;

/**
 * @typedef {import("@/presale-gg/api/api.types").API.Transaction} Transaction
 * @typedef {import("@/presale-gg/api/api.types").API.PurchaseTransactionHistoryItemV2} PurchaseTransactionHistoryItemV2
 * @typedef {"paid" | "unpaid" | "expired"} Status
 * 
 * @param {import("../Modal").ModalProps & {transaction: Transaction}} props
 */
const NowPaymentsModal = ({
  transaction,
  ...others
}) => {
  /** @type {[HTMLCanvasElement | null, (newVal: HTMLCanvasElement | null) => void]} */
  const [qrRef, setQrRef] = useState(null);
  /** @type {[Status, (newVal: Status) => void]} */
  const [status, setStatus] = useState("unpaid");
  /** @type {[PurchaseTransactionHistoryItemV2 | null, (newVal: PurchaseTransactionHistoryItemV2 | null) => void]} */
  const [completedTransaction, setCompletedTransaction] = useState(null);
  const accountData = useAccount();
  const [createdAt, setCreatedAt] = useState(Date.now() - 1000);
  const [expiresInMs, setExpiresInMs] = useState(EXPIRES_IN_MS);

  const timeStr = useMemo(() => {
    const mins = Math.floor(expiresInMs / (60 * 1000));
    const secs = Math.floor((expiresInMs - mins * 60 * 1000) / 1000);
    return `${zeroPad(Math.floor(mins), 2)}:${zeroPad(Math.floor(secs), 2)}`;
  }, [expiresInMs]);

  useEffect(() => {
    if (!others.open) return;
    const interval = setInterval(() => {
      const diff = Math.max(createdAt + EXPIRES_IN_MS - Date.now(), 0);
      if (diff === 0 && status === "unpaid") setStatus("expired");
      setExpiresInMs(diff);
    }, 1_000);
    return () => clearInterval(interval);
  }, [others.open, createdAt, status]);

  useEffect(() => {
    setStatus("unpaid");
    setCreatedAt(Date.now() - 1000);
  }, [transaction]);

  useEffect(() => {
    if (!accountData.address || !others.open) return;
    const abortController = new AbortController();
    waitForNextTransaction(accountData.address, createdAt, undefined, {
      signal: abortController.signal,
    }).then((trx) => {
      refetchUserStakeData();
      refetchUserData().finally(() => {
        if (abortController.signal.aborted) return;
        setStatus("paid");
        setCompletedTransaction(trx);
      });
    });
    return () => abortController.abort();
  });

  useEffect(() => {
    if (!qrRef) return;
    new QRCodeCanvas(transaction.pay_address).draw(qrRef);
  }, [qrRef, transaction.pay_address]);

  const statusCols = {
    paid: "#6cc251",
    unpaid: "#000",
    expired: "#ff3333",
  };

  return (
    <Modal
      {...others}
      title="Transaction"
      style={{ "--status-col": statusCols[status] }}
      className="max-w-[25rem]!"
    >
      <div className="flex flex-col gap-1 mb-2 transition-colors">
        <div className="flex justify-between items-center text-[0.875rem]">
          <div className="flex items-center gap-1 text-[var(--status-col)]">
            {status === "paid" && <CheckCircleIcon className="w-4 h-4" />}
            {status === "unpaid" && <ClockIcon className="w-4 h-4" />}
            {status === "expired" && <ErrorIcon className="w-4 h-4" />}
            {capitalize(status)}
          </div>
          {status === "unpaid" && (
            <p className="text-[#00000080]">Expires in {timeStr}</p>
          )}
        </div>
        <div className="w-full h-2 rounded-full overflow-hidden bg-black/10">
          <div
            className="top-0 left-0 w-full h-full rounded-full transition-all"
            style={{
              "--frac": `${1 - expiresInMs / EXPIRES_IN_MS}`,
              width: status === "unpaid" ? `calc(var(--frac) * 100%)` : '100%',
              backgroundColor: 'var(--status-col)'
            }}
          />
        </div>
      </div>
      {status === "unpaid" && (
        <>
          <div className="flex flex-col gap-4 h-fit items-center">
            <canvas ref={setQrRef} className="rounded-[0.5rem] w-32 h-32 p-0 border-2 border-[#00000033]" />
            <div className="flex flex-col gap-4 w-auto self-stretch">
              <NumberValue
                value={transaction.pay_amount}
                label={`Pay amount (${transaction.pay_currency.toUpperCase()})`}
              />
              <NumberValue
                value={transaction.payment_id}
                label={`Payment ID`}
              />
            </div>
          </div>
          {transaction.payin_extra_id && (
            <>
              <NumberValue
                value={transaction.payin_extra_id}
                label="Destination Tag"
              />
              <p className="text-[#000000a0] text-[0.875rem]">
                You <span className="font-bold">must include</span> the
                destination tag in the transaction or you will not receive your
                tokens
              </p>
            </>
          )}
          <NumberValue
            value={transaction.pay_address}
            label={`Payment address`}
          />
          <p className="text-[#000000a0] text-[0.875rem]">
            Pay{" "}
            <span className="font-bold">{transaction.pay_amount}</span> of{" "}
            <span className="font-bold">
              {transaction.pay_currency.toUpperCase()}
            </span>{" "}
            on the{" "}
            <span className="font-bold">
              {transaction.network.toUpperCase()}
            </span>{" "}
            network
            {transaction.payin_extra_id ? (
              <>
                , with the destination tag of{" "}
                <span className="font-bold">
                  {transaction.payin_extra_id}
                </span>
              </>
            ) : (
              ""
            )}{" "}
            to the address above to confirm the payment.
          </p>
          <p className="text-[#000000a0] text-[0.875rem]">
            The tokens will automatically be deposited upon received payment.
            Note that it can take between 10 minutes and 1 hour for transactions
            to go through.
          </p>
          <p className="text-[#000000a0] text-[0.875rem]">
            Refresh the page to check your balance.
          </p>
        </>
      )}
      {status === "expired" && (
        <>
          <NumberValue value={transaction.payment_id} label={`Payment ID`} />
          <p className="text-[#000000a0] text-[0.875rem]">
            This transaction has expired, do not send any more tokens as they
            may be lost. To try again create a new transaction.
          </p>
        </>
      )}
      {status === "paid" && (
        <>
          <NumberValue
            value={transaction.pay_amount}
            label={`Pay amount (${transaction.pay_currency.toUpperCase()})`}
          />
          <NumberValue
            value={completedTransaction?.tokens_bought ?? "0"}
            label={`You Received ($PREDICT)`}
            noCopy
          />
          <NumberValue value={transaction.payment_id} label={`Payment ID`} />
          <p className="text-[#000000a0] text-[0.875rem]">
            This transaction has completed successfully, do not send any more
            tokens as they may be lost. To try again create a new transaction.
          </p>
        </>
      )}
    </Modal>
  );
};

export default NowPaymentsModal;

/**
 * @param {object} props 
 * @param {string | number} props.value
 * @param {string} props.label
 * @param {boolean} [props.noCopy]
 */
export const NumberValue = (props) => {
  return (
    <FormLabel label={props.label}>
      <Input
        placeholder="0"
        value={props.value}
        readOnly
        buttonText={!props.noCopy ? "Copy" : undefined}
        onButtonClick={!props.noCopy ? () => copyText(props.value.toString()) : undefined}
      />
    </FormLabel>
  );
};
