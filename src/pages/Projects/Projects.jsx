import React from "react";
import "./Projects.css";
import RecipeApp from "./RecipeApp.mp4";
import MarksheetGen from "./marksheetGenerator.mp4";
import WeatherApp from "./WeatherApp.mp4";

const Projects = ({ showSidebar }) => {
  return (
    <div className="main">
      <div
        id="div1"
        className="video-show"
        style={{
          pointerEvents: showSidebar ? "none" : "auto",
        }}
      >
        <video
          controls
          autoPlay
          loop
          muted
          style={{ pointerEvents: showSidebar ? "none" : "auto" }}
        >
          <source src={RecipeApp} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls autoPlay loop muted>
          <source src={MarksheetGen} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="label1">
        <label>Recipe App</label>
        <label>Marksheet Generator</label>
      </div>

      <div className="linkBtn">
        <a href="https://github.com/amresh1kumar/RecipeApp" target="_blank">
          <button>Code</button>
        </a>
        <a
          href="https://github.com/amresh1kumar/MarksheetGenerator"
          target="_blank"
        >
          <button>Code</button>
        </a>
      </div>
      <div className="video-show">
        <video controls autoPlay loop muted>
          <source src={WeatherApp} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="label1">
        <label>Weather App</label>
      </div>

      <div className="linkBtn">
        <a href="https://github.com/amresh1kumar/Weather-App" target="_blank">
          <button>Code</button>
        </a>
      </div>
    </div>
  );
};
export default Projects;
