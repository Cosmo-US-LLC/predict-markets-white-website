import { capitalize, formatLargeNumber, parseNum } from "../../../presale-gg/util";
import classes from "./TransactionHistoryItemList.module.css";
import { api } from "../../../presale-gg/api";
import { useEffect, useMemo, useState } from "react";
import Spinner from "../Spinner";
import { tokenNameMap } from "../../../presale-gg/assets/img/tokens";
import coinLogo from '../../../assets/images/wallet-coins/Icon.svg'
import { useAccount } from "../../../presale-gg/web3";
import clsx from "clsx";

/**
 * @typedef {import("@/presale-gg/api/api.types").API.TransactionHistoryItemV2} TransactionHistoryItemV2
 */

const TransactionHistoryList = (others) => {
  const [loading, setLoading] = useState(true);
  /** @type {[TransactionHistoryItemV2[], (newTransactions: TransactionHistoryItemV2[]) => void]} */
  const [transactions, setTransactions] = useState([]);
  const accountData = useAccount();

  const groupedTransactions = useMemo(() => {
    const groups = [];
    transactions.forEach((trx) => {
      const trxId =
        "parent_transaction_id" in trx
          ? parseNum(trx.parent_transaction_id)
          : trx.record_type === "transaction"
            ? parseNum(trx.id)
            : null;
      if (trxId === null) {
        groups.push({ transactionId: null, transactions: [trx] });
        return;
      }
      let group = groups.find((group) => group.transactionId === trxId);
      if (!group) {
        group = { transactionId: trxId, transactions: [] };
        groups.push(group);
      }
      group.transactions.push(trx);
    });
    const getSortOrder = (a) =>
    ({
      transaction: 0,
      manual_transaction: 1,
      bonus_transaction: 2,
    }[a]);
    groups.forEach((group) => {
      group.transactions.sort(
        (a, b) => getSortOrder(a.record_type) - getSortOrder(b.record_type)
      );
    });
    return groups;
  }, [transactions]);

  const formattedTransactions = useMemo(() => {
    return groupedTransactions.map((group) => {
      if (group.transactions.length === 1)
        return { ...group.transactions[0], extras: [] };
      return {
        ...group.transactions[0],
        extras: group.transactions.slice(1).map((trx) => {
          return {
            label:
              trx.record_type === "bonus_transaction"
                ? capitalize(trx.bonus_type)
                : trx.record_type === "manual_transaction"
                  ? "Manual"
                  : trx.record_type === "transaction"
                    ? "Purchase"
                    : "",
            tokens_received:
              trx.record_type === "bonus_transaction"
                ? trx.bonus_token_amount
                : trx.record_type === "manual_transaction" ||
                  trx.record_type === "transaction"
                  ? trx.tokens_bought
                  : "0",
          };
        }),
      };
    });
  }, [groupedTransactions]);

  useEffect(() => {
    const address = accountData.address;
    if (!address) {
      setLoading(false);
      setTransactions([]);
      return;
    }
    setLoading(true);
    let aborted = false;
    api.getTransactionHistoryV2(address, 0, 100).then((res) => {
      if (aborted) return;
      setTransactions(res.data);
      setLoading(false);
    });
    return () => {
      aborted = true;
    };
  }, [accountData.address]);

  const statusColMap = {
    completed: ["#00bf9a", "#0b4b29"],
    error: ["#fa332f", "#000"],
    failed: ["#fa332f", "#000"],
    expired: ["#fa332f", "#000"],
    pending: ["#bf7e15", "#000"],
    finalising: ["#0c6db3", "#000"],
    processing: ["#0c6db3", "#000"],
    refunded: ["#00bf9a", "#000"],
  };

  return (
    <div {...others} className={clsx(classes["container"], others.className)}>
      {loading ? (
        <Spinner size={10} className={classes["spinner"]} />
      ) : (
        <>
          {formattedTransactions.length === 0 && (
            <p className="text-sm">You have no transactions</p>
          )}
          {formattedTransactions.map((trx) => (
            <div className={classes["transaction"]}>
              <div className={classes["tags"]}>
                {[
                  {
                    text: capitalize(
                      trx.record_type === "bonus_transaction"
                        ? trx.bonus_type
                        : trx.record_type === "transaction"
                          ? "purchase"
                          : trx.record_type
                    ),
                    bg: "#111",
                    textColor: "#fff",
                  },
                  trx.status
                    ? {
                      text: capitalize(
                        trx.status === "pending" ? "unpaid" : trx.status
                      ),
                      bg: statusColMap[trx.status][0],
                      textColor: statusColMap[trx.status][1],
                    }
                    : undefined,
                  "stage_name" in trx && trx.stage_name
                    ? { text: trx.stage_name, bg: "#111", textColor: "#fff" }
                    : undefined,
                ]
                  .filter((chip) => chip !== undefined)
                  .map((chip) => (
                    <div
                      className={classes["tag"]}
                      style={{
                        backgroundColor: chip.bg,
                        color: chip.textColor,
                      }}
                    >
                      {chip.text}
                    </div>
                  ))}
              </div>
              <div className={classes["info-container"]}>
                <div className={classes["left-info"]}>
                  {trx.record_type === "transaction" &&
                    tokenNameMap[
                    trx.payment_token_name?.toLowerCase() ?? ""
                    ] && (
                      <img
                        className={classes["token-img"]}
                        src={
                          trx.record_type === "transaction"
                            ? tokenNameMap[
                            trx.payment_token_name?.toLowerCase() ?? ""
                            ]
                            : coinLogo
                        }
                        width={100}
                        height={100}
                        alt=""
                      />
                    )}
                  <div className={classes["info-text-container"]}>
                    {trx.record_type === "transaction" && (
                      <>
                        <p className={classes["info-text"]}>
                          {formatLargeNumber(
                            parseNum(trx.payment_token_amount)
                          )}{" "}
                          {trx.payment_token_name?.toUpperCase()}
                        </p>
                        {trx.tokens_bought !== null ? (
                          <p className={classes["info-text-sm"]}>
                            {formatLargeNumber(parseNum(trx.tokens_bought))}{" "}
                            $PREDICT for $
                            {formatLargeNumber(
                              parseNum(trx.payment_usd_amount)
                            )}
                          </p>
                        ) : (
                          <p className={classes["info-text-sm"]}>
                            {trx.status === "pending"
                              ? "Unpaid"
                              : "In progress"}
                          </p>
                        )}
                      </>
                    )}
                    {trx.record_type === "manual_transaction" && (
                      <p className={classes["info-text"]}>
                        +{formatLargeNumber(parseNum(trx.tokens_bought))}{" "}
                        $PREDICT
                      </p>
                    )}
                    {trx.record_type === "bonus_transaction" && (
                      <p className={classes["info-text"]}>
                        +{formatLargeNumber(parseNum(trx.bonus_token_amount))}{" "}
                        $PREDICT
                      </p>
                    )}
                    {trx.extras.length > 0 && (
                      <div className={classes["extras"]}>
                        {trx.extras.map((extra) => {
                          return (
                            <div className={classes["extra"]}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#228f3d"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-circle-plus size-4 text-green-500"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 12h8"></path>
                                <path d="M12 8v8"></path>
                              </svg>
                              {extra.label}:{" "}
                              {`+${formatLargeNumber(
                                parseNum(extra.tokens_received)
                              )} $PREDICT`}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <div className={classes["right-text"]}>
                  <p className={classes["info-text-sm"]}>
                    {new Date(trx.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              {trx.record_type === "manual_transaction" && (
                <p className={classes["info-text-sm"]}>
                  <span className="bold">Reason:</span> {trx.reason}
                </p>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TransactionHistoryList;
