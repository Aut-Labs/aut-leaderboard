import React from "react";
import NovaLeaderBoard from "containers/NovaLeaderboard";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import Sticky from "react-stickynode";
import { DrawerProvider } from "common/contexts/DrawerContext";
import Navbar from "containers/Navbar";
import { Modal } from "@redq/reuse-modal";
import styled from "styled-components";
import BubbleBottomLeft from "common/assets/image/bubble2.svg";
import BubbleTopRight from "common/assets/image/bubble.svg";
import Footer from "containers/Footer";
import Image from "common/components/Image";

const BottomLeftBubble = styled(Image)({
  position: "fixed",
  width: "700px",
  height: "700px",
  left: "-350px",
  bottom: "-350px",
  filter: "blur(50px)",
  transform: "rotate(-50deg)",
});

const TopRightBubble = styled(Image)({
  position: "fixed",
  width: "700px",
  height: "700px",
  top: "calc(-350px + 84px)",
  right: "-350px",
  filter: "blur(50px)",
});

const Main = () => {
  // const [connectState, setConnectState] = useState({});
  // const [isLoading, setLoading] = useState(true);
  // const [config, setConfig] = useState(null);
  // const [networks, setNetworks] = useState();

  // useEffect(() => {
  //   getAppConfig()
  //     .then(async (res) => {
  //       setNetworks(res);
  //       setConfig(generateConfig(res));
  //       setLoading(false);
  //     })
  //     .catch();
  // }, []);

  return (
    <>
      <Sticky top={0} innerZ={200} activeClass="sticky-nav-active">
        <DrawerProvider>
          <Navbar />
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
          <NovaLeaderBoard />
          <Footer />
        </Modal>
      </PerfectScrollbar>
    </>
  );
};
export default Main;
