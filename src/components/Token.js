import React from "react";
import token_image from "../assests/diagram_token.webp";
import emoto from "../assests/emot4.png"

import "../scss/token.scss";
const Token = () => {
  return (
    <>
      <section id="token">
        <div className="heading"  data-aos="fade-up">
          <h1>Token allocations</h1>
        </div>
        <div className="container">
          <div className="info"  data-aos="fade-up">
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
          <div className="token_img"  data-aos="fade-up">
            <img src={token_image} alt="Token Image" />
          </div>
        </div>
        <div className="about_btn"  data-aos="fade-up">
          <a href="#" className="btn_1 ">
            <button>
              <b>Read Whitepaper</b>
              <div className="span"><img src={emoto} alt="" /></div>

            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Token;
