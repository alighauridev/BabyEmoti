import React, { useEffect } from "react";
import "../scss/banner.scss";
import img1 from "../assests/img_6.png";
import { FiCopy } from "react-icons/fi";
import icon1 from "../assests/coingecko.webp";
import icon2 from "../assests/coinmarketcap.webp";
import icon3 from "../assests/idmgpnn.webp";
import Marquee from "react-easy-marquee";
import videoIcon from "../assests/wideo-header.webp";
const Banner = () => {
  useEffect(() => {}, []);
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="banner_info" data-aos="fade-up">
            <div className="heading">
              <h1>Redefining Meme Coins with Real-World Utilities!</h1>
            </div>
            <div className="banner_des">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores nobis eos explicabo ullam maiores magni et sunt
                temporibus tenetur neque veritatis placeat fugit voluptates eum,
                ad, odio ut reprehenderit omnis.
              </p>
            </div>

            <div className="banner_btns">
              <a href="#" className="btn_1 " data-emoji="🤑">
                <button>
                  <b>Buy on Uniswap</b>
                  <div className="span">🤑</div>
                </button>
              </a>
              <div className="btn_2">
                <img src={videoIcon} alt="Video Icon" />
                <span>Watch video</span>
              </div>
            </div>
            <div className="contract_address_btn">
              <div className="address_heading">Contract address</div>
              <span>0x9b0E1C344141fB361B842d397dF07174E1CDb988</span>
              <div className="copy_icon">
                <FiCopy />
              </div>
            </div>
            <div className="company_links">
              <a href="#">
                <img src={icon1} alt={icon1} />
              </a>
              <a href="#">
                <img src={icon2} alt={icon2} />
              </a>
              <a href="#">
                <img src={icon3} alt={icon3} />
              </a>
            </div>
          </div>
          <div className="img" data-aos="fade-up">
            <img src={img1} alt="" />
          </div>
        </div>
      </section>
      <Marquee gradient={false} speed={0.1}  className="marqu">
        <p
          style={{
            fontSize: "1.1wrem",
            fontFamily: "Menco !important",
            color: "#80abff",
            textTransform: "uppercase",


          }}
        >
          <div>
          EmotiCoin: Powering Holders With 100% Buybacks From Utilities 🤑 
          </div>
          <div>
          EmotiCoin: Powering Holders With 100% Buybacks From Utilities 🤑 
          </div>
          <div>
          EmotiCoin: Powering Holders With 100% Buybacks From Utilities 🤑 
          </div>
        </p>
      </Marquee>
    </>
  );
};

export default Banner;
