import React from "react";
import "../scss/readMore.scss";
import icon1 from "../assests/icon_1.png";
import icon2 from "../assests/icon_2.png";
import icon3 from "../assests/icon_3.png";
import emoto from "../assests/emot3.png"
const ReadMore = () => {
  const boxs = [
    {
      img: icon1,
      date: (
        <p>
          August 28, 2023
          <span>•</span>6 min read
        </p>
      ),
      des: "EmotiCoin: Pioneering Clarity in the Crypto World with Reverse Splits Protocol",
    },
    {
      img: icon2,
      date: (
        <p>
          August 28, 2023
          <span>•</span>6 min read
        </p>
      ),
      des: "EmotiCoin: Pioneering Clarity in the Crypto World with Reverse Splits Protocol",
    },
    {
      img: icon3,
      date: (
        <p>
          August 28, 2023
          <span>•</span>6 min read
        </p>
      ),
      des: "EmotiCoin: Pioneering Clarity in the Crypto World with Reverse Splits Protocol",
    },
  ];
  return (
    <>
      <section id="readMore">
        <div className="container">
          <div className="heading">
            <h1>You can read about us:</h1>
          </div>

          <div className="grid">
            {boxs.map((box, index) => (
              <>
                <div className="readBox" key={index}> 
                  <div className="img">
                    <img src={box.img} alt={box.date} />
                  </div>
                  <div className="content">
                    <div className="date">{box.date}</div>
                    <a href="#" className="des">{box.des}</a>
                    <a href="#">
                      <div className="btn">Read More <img src={emoto} alt="Emoto" /></div>
                    </a>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadMore;
