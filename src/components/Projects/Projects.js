import React from "react";
import SliderEzKidel from "components/Slider/SliderEzKidel.js";
import VideoPlayer from "components/VideoPlayer/VideoPlayer.js";
import "assets/css/components/projectsStyle.css";
import "assets/css/effects/hover-features.css";
import "assets/css/effects/diamond-shape-grid.css";
import playStoreBlack from "assets/img/store/ps-b.png";
import playStoreWhite from "assets/img/store/ps-w.png";
import appleStoreBlack from "assets/img/store/as-b.png";
import appleStoreWhite from "assets/img/store/as-w.png";

export default function Projects() {
  const themes = localStorage.getItem("themes") || "";
  const textColor = themes === "dark" ? "white" : "#121212";
  return (
    <div id="myprojects">
      <div className="span-container yellow">
        <span
          style={{ color: textColor }}
          className={themes === "dark" ? "cta-dark" : "cta yellow-cta"}
        >
          <span style={{ color: textColor }} className="spandark">
            Easy Kidel
          </span>
        </span>
      </div>
      {/* Ez Kidel */}
      <div className="project-container">
        <div className="project-info">
          <img
            src={require("assets/img/apps/ezkidel/ezkidel.png")}
            className="project-logo"
            alt="project-logo"
          />
          <span style={{ color: textColor }} className="project-name">
            Ez Kidel: Learn English Vocabulary
          </span>
          <span style={{ color: textColor }} className="project-decr">
            Useful application you to improve English vocabulary, listening and
            reading abilities. You can learn English with hundreds of vocabulary
            with images and pronunciation. It's very easy to use with simple,
            intuitive and powerful interface.
          </span>
          <div id="s-km-web" style={{ marginTop: 10 }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.ezratech.ezkidel"
              className="projects-km-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={themes === "dark" ? playStoreWhite : playStoreBlack}
                className="project-playstore-img"
                alt="store-logo"
              />
            </a>
            <div className="projects-km-text" rel="noopener noreferrer">
              <img
                src={themes === "dark" ? appleStoreWhite : appleStoreBlack}
                className="project-playstore-img"
                style={{ opacity: 0.5 }}
                alt="store-logo"
              />
            </div>
          </div>
        </div>
        <SliderEzKidel />
      </div>
      <div className={"kidel-feature-container"}>
        <ul className="kidel-fearture-nav">
          <li className="item1 bubble">
            <div className="bg"></div>
          </li>
          <li className="item2 bubble">
            <div className="bg"></div>
          </li>
          <li className="item3 bubble">
            <div className="bg"></div>
          </li>
          <li className="item4 bubble">
            <div className="bg"></div>
          </li>
          <li className="item5 bubble">
            <div className="bg"></div>
          </li>
          <li className="item6 bubble">
            <div className="bg"></div>
          </li>
        </ul>
      </div>

      <VideoPlayer
        src={require("assets/videos/ezkidel.mp4")}
        bgColor={"#20212A"}
      />
      <div className="projects-km" id="s-km-mobile" style={{ marginTop: 10 }}>
        <a
          href="https://play.google.com/store/apps/details?id=com.ezratech.ezkidel"
          className="projects-km-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={themes === "dark" ? playStoreWhite : playStoreBlack}
            className="project-playstore-img"
            alt="store-logo"
          />
        </a>
        <div className="projects-km-text" rel="noopener noreferrer">
          <img
            src={themes === "dark" ? appleStoreWhite : appleStoreBlack}
            className="project-playstore-img"
            alt="store-logo"
            style={{ opacity: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
