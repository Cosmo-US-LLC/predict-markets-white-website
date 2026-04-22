import { useEffect, useMemo } from "react"
import { hideConnectWalletModal, useModalState } from "../../presale-gg/stores"
import Modal from "../ui/modal"
import { connections, getConfig } from "../../presale-gg/web3"
import { connect } from "@wagmi/core"

const ConnectWalletModal = () => {
  const modalData = useModalState()

const filteredConnections = useMemo(() => {
  return connections.filter((conn) => !conn.hide || conn.hide() === false)
}, [])

  return (
    <Modal open={modalData.connectWalletModalOpen} onClose={hideConnectWalletModal} title="Connect Wallet">
      <div class="flex flex-col gap-2">
        {filteredConnections.map((connection) => (
          <button
            class="flex items-center gap-4 p-2 rounded-md h-12 hover:bg-black/10 cursor-pointer transition-colors font-[500]"
            onClick={async () => {
              if (connection.onClick) {
                connection.onClick()
              } else {
                const { config, walletConnectModal } = await getConfig()
                if (connection.key === 'walletconnect') {
                  walletConnectModal.open()
                } else {
                  connect(config, { connector: config.connectors[connection.connectorIndex] })
                }
              }
              hideConnectWalletModal()
            }}
          >
            <img
              class="w-8 h-8"
              src={connection.icon}
              aria-hidden
              alt=""
            />
            {connection.label}
          </button>
        ))}
      </div>
    </Modal>
  )
}

export default ConnectWalletModal
