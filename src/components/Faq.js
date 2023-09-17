import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import "../scss/faq.scss";
import { FAQ } from "../assests/data";

var nav = "1fr 1fr";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: nav,
    gap: "30px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "#000",
    padding: "10px 20px 10px 20px",
    position: "relative",
    fontSize: "18px",
    fontStyle: "normal",
    fontFamily: '"Zen_Dots"',
    fontWeight: "400",
    lineHeight: "24px",
    marginBottom: "0",
  },
  box: {
    borderRadius: "34px",
    background:
      "linear-gradient(to left, #ffffff, #ffffff) padding-box, linear-gradient(to top, #48f045, #2cd22c) border-box",
    borderRadius: "28px !important",
    border: "3px solid transparent",
    marginBottom: "20px",
    maxWidth: "900px",
    marginInline: "auto",
    position: "relative",
  },
  answer: {
    color: "#000",
    fontFamily: '"Poppins"',
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    listStyle: "none",
  },
}));
const Faq = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="faq" className="accordian">
        <div className="cloud"></div>
        <div
          className="container"
          style={{ maxWidth: "1200px", margin: "auto", padding: "90px 20px" }}
        >
          <div
            className="heading"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 0px",
            }}
          >
            <h1
              data-aos-delay="300"
              data-aos-easing="ease-out"
              data-aos="fade-up"
              style={{
                color: "#FFF",
                fontFamily: '"Zen_Dots"',
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "80px",
                marginBottom: "30px",
              }}
            >
              EmotiCoin FAQ
            </h1>
          </div>
          <div
            className="accordian__grid"
            data-aos-easing="ease-out"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="end">
              <div className={classes.root}>
                {FAQ.map((item, i) => {
                  return (
                    <Accordion key={i} className={classes.box}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          {item.q}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <ul>
                            {item.ans.map((ite, i) => {
                              return (
                                <li className={classes.answer} key={i}>
                                  {ite}
                                </li>
                              );
                            })}
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
