import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/roadmap.scss";
import { roadmap } from "../assests/data";
import correct from "../assests/correctwhite-green.webp";
import emoto from "../assests/emot4.png"
import boll from "../assests/boll.png"
const Roadmap = () => {


  return (
    <>
      <section id="roadmap">
        <div className="heading">
          <h1> Roadmap</h1>
        </div>
        <div className="container">
          <div className="roadmap__grid">
            <div>
              {roadmap.map((item, i) => {
                return (
                  <div className={`item ${i % 2 == 0 ? "left" : "right"}`}>
                    <h2>
                      <img src={correct} alt={item.id} /> {item.id}
                    </h2>
                    <ul>
                      {item.points.map((item, i) => {
                        return <li key={i}>{item}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <figure>
              <img src={boll} alt="" />
            </figure>
          </div>
        </div>
        <div className="aboutTwo_btn" data-aos="fade-up">
          <a href="#" className="btn_1 ">
            <button>
              <b> View Audit Report</b>
              <div className="span"><img src={emoto} alt="" /></div>
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
