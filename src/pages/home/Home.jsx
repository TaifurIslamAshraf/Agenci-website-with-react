import React from "react";

import ArrowImg from "../../utils/images/1.png";
import heroImg from "../../utils/images/Rectangle 2.png";

import "./home.css";

import { BsCheckCircle, BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="left">
          <div className="hero-head">
            <div className="head-text">
              We Are Creative <br />
              Design Based{" "}
              <img className="arrow-img" src={ArrowImg} alt="arrow" />
              <br />
              Agency
            </div>

            <img className="hero-img" src={heroImg} alt="hero" />
          </div>
          <div className="sub-text">
            <span>
              <BsCheckCircle className="icon" />{" "}
              <small>24/7 Online Support</small>
            </span>
            <span>
              <BsCheckCircle className="icon" /> <small>Quick Service</small>
            </span>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>

          <button>Let's Talk</button>
        </div>
        <div className="right">
          <div className="theme">
            <IoMdMoon className="moon-icon" size={15} />
            <BsSunFill className="sun-icon" size={15} />
          </div>
          <div className="social-link">
            <Link to="https://dribbal.com" target="_blank">
              Dribble
            </Link>
            <br />
            <Link to="https://dribbal.com" target="_blank">
              Instagram
            </Link>
            <br />
            <Link to="https://dribbal.com" target="_blank">
              Twitter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
