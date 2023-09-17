import React from "react";
import { steps } from "../assests/data";
import "../scss/upgrade.scss";
const Upgrade = () => {
  return (
    <>
      <section id="upgrade">
        <div className="container">
          <div className="main_heading"  data-aos="fade-up">
            <h1>Upgrade your Telegram </h1>
            <h1>avatar with a unique</h1>
            <h1>EmotiCoin twist!</h1>
          </div>
          <div className="des"  data-aos="fade-up">
            <b>
              Feeling like adding a touch of uniqueness to your Telegram
              profile?
            </b>
            🚀 💫 It's easier than you think! With our new feature, you can now
            randomly generate a creative EmotiCoin-themed avatar. 😄🌕
          </div>

          <div className="steps"  data-aos="fade-up">
            {steps.map((step) => (
              <>
                <div className="step_box">
                  <h1>{step.name}</h1>
                  {step.des}
                </div>
              </>
            ))}
          </div>

          <div className="upgrade_btn"  data-aos="fade-up">
            <a href="#" className="btn_1 ">
              <button>
                <b> I want this!!!!</b>
                <div className="span">🤑</div>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Upgrade;
