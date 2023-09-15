import React, { useEffect } from "react";
import "../scss/banner.scss";
import img1 from "../assests/banner.png";
import { FiCopy } from "react-icons/fi";
import icon1 from "../assests/coingecko.webp";
import icon2 from "../assests/coinmarketcap.webp";
import icon3 from "../assests/idmgpnn.webp";
import Marquee from "react-easy-marquee";
const Banner = () => {
  useEffect(() => {}, []);
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="banner_info">
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
              <a href="#" className="btn_1">
                <button>Buy on Uniswap</button>
              </a>
              <div className="btn_2">
                <button>Watch video</button>
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
          <div className="img">
            <img src={img1} alt="" />
          </div>
        </div>
      </section>
      {/* <Marquee speed={3000}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          eveniet ipsam error tempora aperiam esse necessitatibus officiis eaque
          doloribus, assumenda ullam facilis aspernatur est atque dicta adipisci
          soluta ab beatae.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          eveniet ipsam error tempora aperiam esse necessitatibus officiis eaque
          doloribus, assumenda ullam facilis aspernatur est atque dicta adipisci
          soluta ab beatae.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          eveniet ipsam error tempora aperiam esse necessitatibus officiis eaque
          doloribus, assumenda ullam facilis aspernatur est atque dicta adipisci
          soluta ab beatae.
        </h1>
      </Marquee> */}
    </>
  );
};

export default Banner;
