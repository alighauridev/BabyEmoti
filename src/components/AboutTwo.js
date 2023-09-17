import React from "react";
import "../scss/abouttwo.scss";
import desIcon from "../assests/dessert.webp";
const AboutTwo = () => {
  return (
    <>
      <sectio id="aboutTwo">
        <div className="container">
          <div className="info_left" data-aos="fade-up">
            <p>Rest easy with EmotiCoin's commitment to safety!</p>
          </div>
          <div className="info_right" data-aos="fade-up">
            <div className="img_box">
              <img src={desIcon} alt={"Dessert icon"} />
            </div>
            <div className="des">
              <p>
                <b>EmotiCoin</b> proudly stands tall with a contract audited and
                verified by Dessert Finance. Our commitment to transparency is
                further emphasized by our KYC compliance via a Dubai-based
                entity. With LP tokens securely locked, a Gold Tick on our
                Twitter, and CEX tokens in a multi-signature wallet, we've left
                no stone unturned. Our team's rigorous verification on Telegram
                is the cherry on top. Join EmotiCoin's realm, backed by Dessert
                Finance's seal of trust. Engage, explore, and be assured! 🌟🛡️
              </p>
            </div>
          </div>
        </div>

        <div className="aboutTwo_btn" data-aos="fade-up">
          <a href="#" className="btn_1 ">
            <button>
              <b> View Audit Report</b>
              <div className="span">🤑</div>
            </button>
          </a>
        </div>
      </sectio>
    </>
  );
};

export default AboutTwo;
