import TransactionHistoryList from "../TransactionHistoryList"

const HistoryTab = () => {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <p className="text-sm font-[500]">Transactions</p>
      <TransactionHistoryList className="flex-1" />
    </div>
  )
}

export default HistoryTab