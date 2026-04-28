import {
  http,
  connect,
  watchConnections,
  watchConnection,
  injected,
} from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { coinbaseWallet, metaMask } from "@wagmi/connectors";
import { mainnet, bsc, base, polygon } from "@reown/appkit/networks";
import { createAppKit } from "@reown/appkit";
import { rpcMap } from "./util";
import { WALLET_CONNECT_PROJECT_ID } from "../constants";
import logo from "../../assets/images/logo/favicon.png";
import { getIsMobile } from "../util";

const metadata = {
  name: "Predict Markets",
  description: "",
  url: window.location.origin,
  icons: [`${window.location.origin}${logo}`],
};

export const metaMaskConnector = metaMask()
export const coinbaseConnector = coinbaseWallet({
  appName: "Predict Markets",
  appLogoUrl: `${window.location.origin}${logo}`,
});
export const phantomConnector = injected({
  target: "phantom",
  shimDisconnect: true,
});
const connectors = [
  coinbaseConnector,
  phantomConnector,
  getIsMobile() ? null : metaMaskConnector,
].filter((connector) => !!connector);

// Without this, if you refresh while connected to metamask, you can't disconnect
if (typeof localStorage !== "undefined") localStorage.removeItem("wagmi.store");

export const wagmiAdapter = new WagmiAdapter({
  transports: {
    [mainnet.id]: http(),
    [bsc.id]: http(),
    [polygon.id]: http(),
    [base.id]: http(rpcMap["8453"]),
  },
  connectors,
  networks: [mainnet, bsc, base, polygon],
  chains: [mainnet, bsc, base, polygon],
  projectId: WALLET_CONNECT_PROJECT_ID,
});

export const walletConnectModal = createAppKit({
  adapters: [wagmiAdapter],
  projectId: WALLET_CONNECT_PROJECT_ID,
  networks: [mainnet, bsc, base, polygon],
  metadata,
  themeMode: "dark",
  featuredWalletIds: [
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0", // Trust Wallet
  ],
  features: {
    socials: false,
    email: false
  }
});

export const config = wagmiAdapter.wagmiConfig;

let loaded = false
const localWalletConnectedKey = "connect-wallet-id-v2";
export const loadStoredConnection = () => {
  if (loaded) return
  const connectedConnection = localStorage.getItem(localWalletConnectedKey);
  if (!connectedConnection) return;
  const connector = config.connectors.find(
    (conn) => conn.id === connectedConnection
  );
  if (!connector) return;
  loaded = true
  connect(config, {
    connector,
  });
};

if (typeof localStorage !== "undefined") {
  loadStoredConnection()
  watchConnections(config, {
    onChange: (connections) => {
      if (connections.length === 0) {
        localStorage.removeItem(localWalletConnectedKey);
      } else {
        localStorage.setItem(
          localWalletConnectedKey,
          connections[0].connector.id
        );
      }
    },
  });

  watchConnection(config, {
    onChange: (accounts) => {
      if (!accounts.isConnected) {
        localStorage.removeItem(localWalletConnectedKey);
      }
    },
  });
}
