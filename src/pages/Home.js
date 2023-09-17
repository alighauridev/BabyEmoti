import React, { useState } from "react";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";

import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import About from "../components/About";
import RoadMapOne from "../components/RoadMapOne";
import Tokenomics from "../components/Tokenomics";
import Join from "../components/Join";
import Team from "../components/Team";
import Utility from "../components/Utility";
import Token from "../components/Token";
import AboutTwo from "../components/AboutTwo";
import Upgrade from "../components/Upgrade";
import ReadMore from "../components/ReadMore";

const Home = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffb800");
  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <main>
            <Navigation />
            <Banner />
            <About />
            <Utility />
            <Token />
            <AboutTwo />
            <Upgrade />
            <div className="blue_bc">
              <Roadmap />
              <ReadMore />
              <Faq />
              <Join />
            </div>
            {/* <Tokenomics />
            <Join />
            <Team /> */}
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default Home;
