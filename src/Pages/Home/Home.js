import React, { useState } from "react";
import Eigth from "../Eighth/Eigth";
import Eleven from "../Eleven/Eleven";
import Fifth from "../Fifth/Fifth";
import Fourth from "../Fourth/Fourth";
import Second from "../Second/Second";
import Seventh from "../Seventh/Seventh";
import Sixth from "../Sixth/Sixth";
import Tenth from "../Tenth/Tenth";
import Third from "../Third/Third";
import "./Home.css";
const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const [download, setDownload] = useState(false);
  const Ham = () => {
    setSidebar(!sidebar);
  };
  const Down=()=>{
    setDownload(!download)
  }
  return (
    <>
      <div className="home">
        <div className="icon">
          <img src="https://stepn.com/img/logo.svg" alt="" />
        </div>
        <div className="join breath " onClick={Down}>DOWNLOAD NOW</div>
        <div className="menu" onClick={Ham}>
          <span className="menu-item"></span>
          <span className="menu-item"></span>
          <span className="menu-item"></span>
        </div>
        {sidebar && (
          <div data-role="menu" id="menu" class="sc-gsDKAQ hduyqf active">
            <div data-role="menu" onClick={Ham}>
              home
            </div>
            <div data-role="menu">
              <a data-role="menu" href="/howToPlay">
                How to Play
              </a>
            </div>
            <div data-role="menu">
              <a href="https://whitepaper.stepn.com/" data-role="menu">
                Whitepaper
              </a>
            </div>
            <div data-role="menu">
              <a data-role="menu" href="/litePaper">
                Litepaper
              </a>
            </div>
            <div data-role="menu">
              <a href="https://linktr.ee/stepnofficial" data-role="menu">
                LinkTree
              </a>
            </div>
          </div>
        )}

        {download && (
          <div class="sc-dkPtRN dtabGm">
            <div class="sc-eCImPb lmglUU">
              <div class="box" >
                <img onClick={Down}
                  src="https://stepn.com/img/closeDialog.svg"
                  class="sc-hKwDye cZGhSG"
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <Second></Second>
      <Third></Third>
      <Fourth></Fourth>
      <Fifth></Fifth>
      <Sixth></Sixth>
      <Seventh></Seventh>
      <Eigth></Eigth>

      <Tenth></Tenth>
      <Eleven></Eleven>
    </>
  );
};

export default Home;
