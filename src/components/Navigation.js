import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../assests/data";
import "../scss/navigation.scss";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import logo1 from "../assests/logo_main.webp";

import {
  LinkOff,
  LinkOffOutlined,
  LinkRounded,
  Menu,
  ClearAllOutlined,
} from "@material-ui/icons";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { Backdrop } from "@material-ui/core";
const Navigation = () => {
  const [navToggler, setNavToggler] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    if (window.scrollY >= 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
      setNavToggler(false);
    }
  });
  function barBtn() {
    setNavToggler(!navToggler);
    setNavColor(!navColor);
  }
  return (
    <>
      <header className={navToggler ? "nav__active" : ""}>
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              <div className="logo">
                <a href="#">
                  <img src={logo1} alt="logo" />

                </a>
              </div>
              <nav>
                {/* <Backdrop
                  open={navToggler ? true : false}
                  style={{ zIndex: "11" }}
                  onClick={() => setNavToggler(false)}
                > */}
                <ul className={navToggler ? "ul__active" : ""}>
                  {nav.map((ite, ind) => {
                    return (
                      <li key={ind}>
                        <a
                          style={navColor ? { textShadow: "none" } : {}}
                          href={ite.path}
                        >
                          {ite.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                {/* </Backdrop> */}
              </nav>
              <div className="nav__btns">
                <div className="btn">
                  <span>UNISWAP </span>
                  🤑
                </div>
                <div className="btn__">
                  <span>Compitetion </span>
                  <img src="https://emoticoin.io/wp-content/themes/codetheme-child/img/zzzzz.webp" style={{ width: '25px' }} alt="" />
                </div>
                <i onClick={() => barBtn()} className="bars">
                  {/* <img
                    src={
                      !navToggler ? "/images/bb (1).png" : "/images/bb (2).png"
                    }
                    alt="bars"
                    style={{
                      width: "33px",
                      height: "auto",
                      filter: "invert(1)",
                      cursor: "pointer",
                      transitions: "all 0.5s ease-in-out",
                    }}
                  /> */}

                  {!navToggler ? <MenuIcon /> : <ClearIcon />}
                </i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={() => window.scroll(0, 0)}
        className="auto_scroll"
        style={scroll ? { transform: "scale(1)" } : {}}
      >
        <i>
          <MdKeyboardArrowUp />
        </i>
      </div>
    </>
  );
};

export default Navigation;
