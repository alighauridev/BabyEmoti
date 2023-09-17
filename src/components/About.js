import React from "react";
import heading from "../assests/about.h.png";
import about_img from "../assests/about_image.webp";
import "../scss/about.scss";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="img"  data-aos="fade-up">
            <img src={about_img} alt="About Image" />
          </div>
          <div className="content"  data-aos="fade-up">
            <div className="heading">
              <h1>About EmotiCoin</h1>
            </div>
            <div className="para">
              <p>
                <b>Connecting community passion with crypto ingenuity! 🚀</b>
                As pioneers in the meme coin realm, we're proud to introduce the
                first-ever MemeCoin Ecosystem. With an immutable commitment to
                0% taxes and utilities, our vision goes beyond mere
                transactions. With 100% buybacks into $EMOTI and every utility
                designed to uplift our community, we're not just participating
                in the crypto market but leading it! 💎
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
        </div>
      </section>
    </>
  );
};

export default About;
