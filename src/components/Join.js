import React from "react";
import "../scss/join.scss";
import img1 from "../assests/capture.jpeg";
const Join = () => {
  return (
    <>
      <section id="join">
        <div className="container">
          <div className="content_box" data-aos="fade-up">
            <div className="heading">
              <h1>Become a part of our community</h1>
            </div>
            <div className="join_btn" >
              <a href="#" className="btn_1 ">
                <button>
                  <b> I want this!!!!</b>
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

export default Join;
