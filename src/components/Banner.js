import React, { useEffect } from "react";
import "../scss/banner.scss";
import img1 from "../assests/img_6.png";
import { FiCopy } from "react-icons/fi";
import icon1 from "../assests/coingecko.webp";
import icon2 from "../assests/coinmarketcap.webp";
import icon3 from "../assests/idmgpnn.webp";
import eye from "../assests/eye.png";
import face from "../assests/face.png";
import eyeBall from "../assests/img_1.png";
// import Marquee from "react-simple-marquee";
import Marquee from "react-fast-marquee";
import videoIcon from "../assests/wideo-header.webp";
const Banner = () => {
  useEffect(() => { }, []);
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
            <div className="emoji">
              <img src={img1} alt="" />
              <div style={{
                position: 'absolute',
                top: '25%',
                left: '50%',
                width: '60%',
                transform: 'translateX(-50%)'
              }}>

                <div className="eyes">
                  <div className="left__eye">
                    <figure className="eyeBall">
                      <img src={eyeBall} alt="" className="eye__ball" />

                    </figure>
                    <img src={eye} className="eye" alt="" />
                  </div>
                  <div className="right__eye">
                    <figure className="eyeBall">
                      <img src={eyeBall} alt="" className="eye__ball" />

                    </figure>
                    <img src={eye} className="eye" alt="" />
                  </div>
                </div>
                <div className="face">
                  <div className="img__face">
                    <img src={face} alt="" />
                  </div>
                  <div className="tongue">
                    <img src="https://emoticoin.io/wp-content/themes/codetheme-child/anims/emoticon/images/img_2.png" alt="" />
                  </div>
                </div>
              </div>
              <div style={{
                position: 'absolute',
                top: '25%',
                left: '50%',
                width: '100%',
                transform: 'translateX(-50%)'
              }} className="gallery">
                <img src="https://emoticoin.io/wp-content/themes/codetheme-child/img/img-usmiech/emo_party.webp" alt="" />
                <img src="https://emoticoin.io/wp-content/themes/codetheme-child/img/img-usmiech/emo_cash.webp" alt="" />
                <img src="https://emoticoin.io/wp-content/themes/codetheme-child/img/img-usmiech/emo_love.webp" alt="" />
                <img src="https://emoticoin.io/wp-content/themes/codetheme-child/img/img-usmiech/bubla_6.webp" alt="" />
                <img src="https://emoticoin.io/wp-content/themes/codetheme-child/img/img-usmiech/bubla_5.webp" alt="" />
                <img src="https://emoticoin.io/wp-content/themes/codetheme-child/img/img-usmiech/emo_happy.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section >

      <Marquee gradient={false} speed={20} className="marqu">
        {[1, 2, 3, 3].map((e, i) => (
          <div key={i} className="mar">
            EmotiCoin: Powering Holders With 100% Buybacks From Utilities 🤑
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default Banner;
