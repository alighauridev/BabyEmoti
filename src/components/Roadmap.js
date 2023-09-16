import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/roadmap.scss";
import { roadmap } from "../assests/data";
import correct from "../assests/correctwhite-green.webp";

const Roadmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    // how to check page distance from top
  }, []);
  
  return (
    <>
      <section id="roadmap">
        <div className="heading">
          <h1> Roadmap</h1>
        </div>
        <div className="container">
          <div className="roadmap__grid">
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
        </div>
      </section>
    </>
  );
};

export default Roadmap;
