import React from "react";
import token_image from "../assests/diagram_token.webp";

import "../scss/token.scss";
const Token = () => {
  return (
    <>
      <section id="token">
        <div className="heading">
          <h1>Token allocations</h1>
        </div>
        <div className="container">
          <div className="info">
            <ul>
              <li>
                <b>
                  90 <span>%</span>
                </b>
                Liquidity Pool
              </li>
              <li>
                <b>
                  10 <span>%</span>
                </b>
                - Centralized Exchanges
              </li>
              <li>
                <b>
                  0 <span>%</span>
                </b>
                - Team Tokens
              </li>
              <li>
                <b>
                  0 <span>%</span>
                </b>
                - Private Sale
              </li>
              <li>
                <b>
                  0 <span>%</span>
                </b>
                - Presale
              </li>
            </ul>
          </div>
          <div className="token_img">
            <img src={token_image} alt="Token Image" />
          </div>
        </div>
        <div className="about_btn">
          <a href="#" className="btn_1 ">
            <button>
              <b>Read Whitepaper</b>
              <div className="span">🤑</div>
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Token;
