import React, { useEffect } from "react";
import "../scss/team.scss";
import team1 from "../assests/Team.2.jpg";
import { useState } from "react";
import { team } from "../assests/data";
import { Skeleton } from "@mui/material";
const Team = () => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section id="team">
        <div className="container">
          <div className="heading">
            <h1>Our Team</h1>
          </div>
          <div className="team_grid">
            {team.map((item, index) => (
              <>
                <div className="team_box" key={index}>
                  <div className="team_img">
                    <img src={team1} alt={item.name} />
                  </div>
                  <div className="team_detial">
                    <h1>{item.name}</h1>
                    <span>{item.position}</span>
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

export default Team;
