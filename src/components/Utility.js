import React from "react";
import heading from "../assests/about.h.png";
import slide_img from "../assests/slide-1-1.webp";
import "../scss/utility.scss";
const Utility = () => {
  return (
    <>
      <section id="utility">
        <div className="top_content"  data-aos="fade-up">
          <h1>Emoticoin's Utility</h1>
          <p>
            It's a realm never seen before in the meme coin universe! 🌌 At
            EmotiCoin, we're creating a new crypto landscape. An ecosystem where
            utilities are more than just tools; they're constant celebrations!
            🎉 From 100% buybacks to passive income, we're all about rewarding
            our community. It's a cohesive, vibrant world tailored to boost
            benefits for every holder.
          </p>
        </div>

        <div className="container">
          <div className="content"  data-aos="fade-up">
            <div className="heading">
              <h1>NFT Staking</h1>
            </div>
            <div className="para">
              <p>
                EmotiCoin redefines the staking game. By staking your NFTs,
                you're not just holding; you're actively generating passive
                income like an absolute boss. The principle is simple: the more
                you stake, the higher your potential rewards, and the more swag
                you generate. It's a system designed to benefit the committed,
                ensuring that every NFT you stake works for you, maximizing your
                returns in the EmotiCoin ecosystem.
              </p>
            </div>
            <div className="about_btn">
              <a href="#" className="btn_1 ">
                <button>
                  <b>Read Whitepaper</b>
                  <div className="span">🤑</div>
                </button>
              </a>
            </div>
          </div>
          <div className="img"  data-aos="fade-up">
            <img src={slide_img} alt="About Image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Utility;
