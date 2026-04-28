import { useApiState } from "../../../presale-gg/stores/api.store"
import { useEffect, useState } from "react"
import { buyWithCard, buyWithCrypto, formatLargeNumber, formatPrecision, parseNum } from "../../../presale-gg/util"
import { refetchUserData, refetchUserStakeData } from "../../../presale-gg/stores/user.store"
import { api } from "../../../presale-gg/api"
import TokenSelectGrid from "../TokenSelectGrid"
import StageBox from "../StageBox"
import TokenPriceBox from "../TokenPriceBox"
import TokenAmountInputs from "../TokenAmountInputs"
import Modal from "../../ui/modal"
import { useAccount } from "../../../presale-gg/web3"
import Loader from "../Loader"
import { BonusCodeIcon, HowToBuyIcon, ReferralLinkIcon } from "../Icons"
import { BonusCodeInput, ReferralCodeInput } from "../CodeInputs"
import { showConnectWalletModal } from "../../../presale-gg/stores"
import NowPaymentsModal from "../NowPaymentsModal"
import WalletTransferModal from "../WalletTransferModal/WalletTransferModal"
import ContactModal from "../ContactModal"
import Spinner from "../Spinner"
import toast from "react-hot-toast"
/**
 * @typedef {import("../../../presale-gg/api/api.types").API.PaymentToken} PaymentToken
 * @typedef {import("../../../presale-gg/api/api.types").API.PurchaseTransactionHistoryItemV2} PurchaseTransactionHistoryItemV2
 * @typedef {import("../../../presale-gg/api/api.types").API.Transaction} Transaction
 * @typedef {import("../../../presale-gg/util/buy.util").BuyState} BuyState
 */

const BuyTab = () => {
  const { stage, stageLoading, paymentTokens, presaleEnded } = useApiState()
  const accountData = useAccount()

  const [paymentAmountStr, setPaymentAmountStr] = useState("1")
  const [receiveAmountStr, setReceiveAmountStr] = useState("0")

  /** @type {[import("../../presale-gg/api/api.types").API.PaymentToken | null, (newToken: import("../../presale-gg/api/api.types").API.PaymentToken | null => void]} */
  const [selectedToken, setSelectedToken] = useState(null)

  useEffect(() => {
    if (!paymentTokens?.length || selectedToken !== null) return
    setSelectedToken(paymentTokens.find((token) => token.symbol.toUpperCase() === "ETH") ?? paymentTokens[0] ?? null)
  }, [paymentTokens, selectedToken])

  useEffect(() => {
    if (!selectedToken || !stage) return
    const receiveNum = parseNum(selectedToken.price) * parseNum(paymentAmountStr) / parseNum(stage?.token_price ?? 1)
    setReceiveAmountStr(formatPrecision(receiveNum, 0, 3))
  }, [selectedToken, stage?.token_price])

  const [transactionLoading, setTransactionLoading] = useState(false);

  /** @type {[Transaction | null, (newVal: Transaction | null) => void]} */
  const [createdTransaction, setCreatedTransaction] = useState(null);
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);

  /** @type {[BuyState["type"] | null, (newVal: BuyState["type"] | null) => void]} */
  const [buyState, setBuyState] = useState("sending");
  /** @type {[PurchaseTransactionHistoryItemV2 | null, (newVal: PurchaseTransactionHistoryItemV2 | null) => void]} */
  const [boughtTransaction, setBoughtTransaction] = useState(null);
  const [boughtTransactionHash, setBoughtTransactionHash] = useState(null);
  /** @type {[PaymentToken | null, (newVal: PaymentToken | null) => void]} */
  const [boughtPaymentToken, setBoughtPaymentToken] = useState(null);
  const [boughtPaymentAmountStr, setBoughtPaymentAmountStr] = useState(null);
  const [boughtModalOpen, setBoughtModalOpen] = useState(true);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [transactionErrorMessage, setTransactionErrorMessage] = useState(null);

  const buy = async () => {
    console.log("BUYING")
    const account = accountData.address;
    if (presaleEnded) return toast.error("Presale has ended");
    if (!account) return toast.error("You must connect your wallet first");
    if (transactionLoading) return;
    if (!selectedToken) return;
    setTransactionLoading(true);
    try {
      if (selectedToken.symbol.toLowerCase() === "card") {
        await buyCard();
      } else {
        setBuyState(null);
        setBoughtModalOpen(true);
        setBoughtTransaction(null);
        setBoughtTransactionHash(null);
        setBoughtPaymentToken(selectedToken);
        setBoughtPaymentAmountStr(paymentAmountStr);
        setTransactionLoading(true);
        const res = await buyWithCrypto({
          paymentToken: selectedToken,
          paymentTokenNum: paymentAmountStr,
          walletAddress: account,
          onStateChanged: (state) => {
            setBuyState(state.type);
            if (state.type === "confirming") {
              setBoughtTransactionHash(state.transactionHash);
            } else if (state.type === "finished") {
              setBoughtTransaction(state.transaction);
              refetchUserData();
              refetchUserStakeData();
            } else if (state.type === "errored") {
              setTransactionErrorMessage(
                api.getApiErrorMessage(state.error, "Error sending transaction")
              );
            }
            if (state.type !== "sending") {
              setTransactionLoading(false);
            }
          },
        });
        if (!res) return setTransactionLoading(false);
        if (res.type === "created") {
          setCreatedTransaction(res.transaction);
          setTimeout(() => {
            setTransactionModalOpen(true);
          }, 50);
          setTransactionLoading(false);
        }
      }
    } catch (err) {
      console.error(err);
      setTransactionLoading(false);
    }
  };

  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [erroredModalOpen, setErroredModalOpen] = useState(false);
  const [pendingModalOpen, setPendingModalOpen] = useState(false);
  const [successBoughtModalOpen, setSuccessBoughtModalOpen] = useState(false);

  const buyCard = async () => {
    try {
      const account = accountData.address;
      if (!account) return toast.error("You must connect your wallet first");
      const usdAmount = parseNum(paymentAmountStr);
      await buyWithCard({
        name: `${formatLargeNumber(parseNum(receiveAmountStr))} $PREDICT`,
        usd: usdAmount,
        walletAddress: account,
        onClosedEarly: () => {
          setPendingModalOpen(true);
        },
        onError: () => setErroredModalOpen(true),
        onSuccess: (tokens) => {
          if (tokens !== undefined) {
            setSuccessBoughtModalOpen(true);
          } else {
            setSuccessModalOpen(true);
          }
          refetchUserData();
          refetchUserStakeData();
        },
      });
      // eslint-disable-next-line no-unused-vars
    } catch (_) { /* empty */ }
    setTransactionLoading(false);
  };

  const [visibleCode, setVisibleCode] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.has("referral_code")) return "referral"
    if (params.has("bonus_code")) return "bonus"
    return null
  })

  return (
    <Loader loading={stageLoading}>
      <StageBox />
      <TokenSelectGrid value={selectedToken} onChange={setSelectedToken} />
      <TokenPriceBox />
      <TokenAmountInputs
        selectedToken={selectedToken}
        paymentAmountStr={paymentAmountStr}
        receiveAmountStr={receiveAmountStr}
        onPaymentAmountChange={setPaymentAmountStr}
        onReceiveAmountChange={setReceiveAmountStr}
      />

      <button
        type="button"
        className="btn_primary rounded-full! w-full text-[1.25rem] font-medium text-white transition-colors hover:bg-[#0066cc] h-[3.5rem] disabled:opacity-60"
        onClick={() => {
          if (accountData.isConnected) buy()
          else showConnectWalletModal()
        }}
      >
        {transactionLoading
          ? <Spinner size={6} />
          : accountData.isConnected
            ? presaleEnded
              ? "Presale Ended"
              : "Buy $PREDICT"
            : "Connect Wallet"}
      </button>
      {!presaleEnded && (
        <p className="bg-[#F2F2F2] rounded-[0.5rem] mx-2 px-4 py-1.5 text-center text-[#000000CC] font-[500] text-[0.75rem]">
          <span class="font-bold text-[#007FEC]">Special Bonus:</span> Get 20% more PREDICT tokens with the code <span class="font-bold">PRE20</span> (valid for a limited time only)
        </p>
      )}
      {visibleCode === null && <div className="flex gap-4 justify-center">
        {[
          { label: "Bonus Code", icon: BonusCodeIcon, onClick: () => setVisibleCode((code) => code === 'bonus' ? null : 'bonus') },
          {
            label: "How to Buy", icon: HowToBuyIcon, onClick: () => {
              const element = document.getElementById("how-to-buy");
              if (!element) return
              const offset = 80;
              const elementPosition =
                element.getBoundingClientRect().top +
                window.scrollY -
                offset;
              window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
              });
            }
          },
          { label: "Referral Code", icon: ReferralLinkIcon, onClick: () => setVisibleCode((code) => code === 'referral' ? null : 'referral') }
        ].map(({ label, icon: Icon, onClick }) => (
          <button key={label} className="flex items-center text-[0.75rem] gap-1 cursor-pointer underline" onClick={onClick}>
            <Icon />
            {label}
          </button>
        ))}
      </div>}
      {visibleCode === "referral" && <ReferralCodeInput onClose={() => setVisibleCode(null)} />}
      {visibleCode === "bonus" && <BonusCodeInput onClose={() => setVisibleCode(null)} />}

      <ContactModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {boughtPaymentAmountStr !== null && boughtPaymentToken !== null && buyState !== null && (
        <WalletTransferModal
          open={boughtModalOpen}
          onClose={() => {
            setBoughtModalOpen(false)
            setTimeout(() => setContactModalOpen(true))
          }}
          payCurrency={boughtPaymentToken}
          payAmount={boughtPaymentAmountStr}
          state={buyState}
          transactionHash={boughtTransactionHash}
          transaction={boughtTransaction}
          transactionError={transactionErrorMessage}
        />
      )}

      {createdTransaction && (
        <NowPaymentsModal
          open={transactionModalOpen}
          onClose={() => {
            setTransactionModalOpen(false);
            setContactModalOpen(true);
          }}
          transaction={createdTransaction}
        />
      )}

      <Modal
        title="Transaction Successful"
        open={successModalOpen}
        onClose={() => {
          setSuccessModalOpen(false);
          setContactModalOpen(true);
        }}
      >
        <p>
          The transaction was successful. Please wait a minute and refresh the
          transactions tab to see your package.
        </p>
      </Modal>
      <Modal
        title="Transaction Successful"
        open={successBoughtModalOpen}
        onClose={() => {
          setSuccessBoughtModalOpen(false);
          setContactModalOpen(true);
        }}
      >
        <p>
          The transaction was successful. You bought{" "}
          {boughtTransaction?.tokens_bought ?? "Unknown"} $PREDICT
        </p>
      </Modal>
      <Modal
        title="Transaction Errored"
        open={erroredModalOpen}
        onClose={() => setErroredModalOpen(false)}
      >
        <p>The transaction was not successful. Please try again.</p>
      </Modal>
      <Modal
        title="Transaction Pending"
        open={pendingModalOpen}
        onClose={() => {
          setPendingModalOpen(false);
          setContactModalOpen(true);
        }}
      >
        <p>
          The transaction is pending. Please wait a minute and refresh the
          transactions tab to see your tokens.
        </p>
      </Modal>
    </Loader>
  )
}

export default BuyTab