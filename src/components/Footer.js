import React from "react";
import {
  FaAccessibleIcon,
  FaDiscord,
  FaPage4,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineTelegram } from "react-icons/ai";
import "../scss/footer.scss";
import { LinkRounded } from "@material-ui/icons";
import bac from "../assests/footer-bac.jpg";
import telegram from "../assests/loc.webp";
import tweeter from "../assests/tweeter-new.webp";
import instagram from "../assests/insta.2 (1).webp";
import cos from "../assests/cos.2.webp";
import youtub from "../assests/youtube.webp";
import logo from "../assests/logo_main.webp";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="top">
            <div className="footer_left">
              <div className="logo">
                <img src={logo} alt="Footer Logo" />
              </div>
              <div className="para">First Ever Reverse Split Protocol</div>
              <div className="left_bottom">
                <span>Any questions?</span>
                <a href="#">contact@emoticoin.io</a>
              </div>
              <div className="icons">
                <a href="#">
                  <img src={telegram} alt="Telegram" />
                </a>
                <a href="#">
                  <img src={tweeter} alt="Tweeter" />
                </a>
                <a href="#">
                  <img src={instagram} alt="Instagram" />
                </a>
                <a href="#">
                  <img src={cos} alt="Cos" />
                </a>
                <a href="#">
                  <img src={youtub} alt="Youtub" />
                </a>
              </div>
            </div>
            <div className="footer_right">
              <h1>RISK DISCLOSURE</h1>
              <p>
                Please note there are always risks associated with smart
                contracts. You invest in EmotiCoin at your own risk. EmotiCoin
                is not a registered broker, analyst, or investment advisor.
                Everything provided on this site is purely for guidance,
                informational, and educational purposes. All information should
                be independently verified and confirmed. We do not accept
                liability for any loss or damage caused by reliance upon such
                information or services. Please be aware of the risks involved
                in any financial market. Only invest money that you can afford
                to lose. When in doubt, consult a qualified financial advisor
                before making investment decisions.💼📉💰
              </p>

              <h1>LEGAL DISCLAIMER</h1>
              <p>
                The information provided on this website does not constitute
                investment, financial, trading, or any other form of advice. The
                EmotiCoin team does not recommend buying, selling, or holding
                cryptocurrency. Conduct your due diligence and consult your
                financial advisor before making investment decisions. By
                purchasing EmotiCoin, you agree that you are not buying security
                or investment, and you hold the team harmless and are not liable
                for any losses or taxes you may incur. You also agree that the
                team is presenting the token "as is" and is not required to
                provide support or services. You should not expect any form from
                EmotiCoin and its team. Although EmotiCoin is a community-driven
                DeFi token for experimental reasons and not a registered digital
                currency, the team strongly recommends that citizens in areas
                with government bans on Crypto not purchase it because the team
                cannot ensure compliance with your territories regulations.
                Always ensure compliance with your local laws and regulations
                before making any purchase.🧙‍♂️💼🛡️🌐🚀📊📈💫.
              </p>
            </div>
          </div>
          <div className="bottom">
            <p>
              All the content provided on this website is available under a
              Creative Commons license, allowing you to freely use, share, and
              adapt it for non-commercial purposes while attributing
              EmotiCoin.io as the source.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
