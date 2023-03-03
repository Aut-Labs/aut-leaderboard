import React, { useState } from "react";
import Footer from "containers/Footer";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useEffect } from "react";
import { Loading } from "common/components/ModalPopupWrapper";
import NovaLeaderboard from "containers/NovaLeaderboard";

const Main = () => {
  const [appReady, setAppReady] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  return (
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
      {loading || !appReady ? (
        <Loading />
      ) : (
        <>
          <NovaLeaderboard />
          {/* <Footer /> */}
        </>
      )}
    </PerfectScrollbar>
  );
};
export default Main;
