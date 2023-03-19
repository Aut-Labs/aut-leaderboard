import React, { useState } from "react";
import NovaLeaderBoard from "containers/NovaLeaderboard";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Navbar";
import { getAppConfig } from "api/index.api";
import { useEffect } from "react";
import { DAppProvider, MetamaskConnector } from "@usedapp/core";
import { WalletConnectConnector } from "@usedapp/wallet-connect-connector";
import { ethers } from "ethers";
import AutLoading from "common/components/AutLoading";
import { Modal } from "@redq/reuse-modal";
import styled from "styled-components";
import BubbleBottomLeft from "common/assets/image/bubble_bottom_left.png";
import BubbleTopRight from "common/assets/image/bubble_top_right.png";
import Footer from "containers/Footer";
import Image from "common/components/Image";

const generateConfig = (networks) => {
  const readOnlyUrls = networks.reduce((prev, curr) => {
    if (!curr.disabled) {
      const network = {
        name: "mumbai",
        chainId: 80001,
        _defaultProvider: (providers) =>
          new providers.JsonRpcProvider(curr.rpcUrls[0]),
      };
      const provider = ethers.getDefaultProvider(network);
      prev[curr.chainId] = provider;
    }
    return prev;
  }, {});

  return {
    readOnlyUrls,
    autoConnect: false,
    networks: networks
      .filter((n) => !n.disabled)
      .map((n) => ({
        isLocalChain: false,
        isTestChain: process.env.NEXT_PUBLIC_NETWORK_ENV === "testing",
        chainId: n.chainId,
        chainName: n.network,
        rpcUrl: n.rpcUrls[0],
        nativeCurrency: n.nativeCurrency,
      })),
    gasLimitBufferPercentage: 50000,
    connectors: {
      metamask: new MetamaskConnector(),
      walletConnect: new WalletConnectConnector({
        rpc: networks
          .filter((n) => !n.disabled)
          .reduce((prev, curr) => {
            // eslint-disable-next-line prefer-destructuring
            prev[curr.chainId] = curr.rpcUrls[0];
            return prev;
          }, {}),
        infuraId: "d8df2cb7844e4a54ab0a782f608749dd",
      }),
    },
  };
};

const BottomLeftBubble = styled(Image)({
  position: "fixed",
  width: "700px",
  height: "700px",
  left: "-350px",
  bottom: "-350px",
});

const TopRightBubble = styled(Image)({
  position: "fixed",
  width: "700px",
  height: "700px",
  top: "calc(-350px + 84px)",
  right: "-350px",
});

const Main = () => {
  const [connectState, setConnectState] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [config, setConfig] = useState(null);
  const [networks, setNetworks] = useState();

  useEffect(() => {
    getAppConfig()
      .then(async (res) => {
        setNetworks(res);
        setConfig(generateConfig(res));
        setLoading(false);
      })
      .catch();
  }, []);

  return (
    <>
      {isLoading || !config ? (
        <AutLoading />
      ) : (
        <DAppProvider config={config}>
          <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar networks={networks} onConnected={setConnectState} />
            </DrawerProvider>
          </Sticky>

          <PerfectScrollbar
            options={{
              suppressScrollX: true,
              useBothWheelAxes: false,
              swipeEasing: true,
            }}
            style={{
              height: "100vh",
            }}
          >
            <BottomLeftBubble src={BubbleBottomLeft.src} />
            <TopRightBubble src={BubbleTopRight.src} />
            <Modal>
              <NovaLeaderBoard connectState={connectState} />
              <Footer />
            </Modal>
          </PerfectScrollbar>
        </DAppProvider>
      )}
    </>
  );
};
export default Main;
