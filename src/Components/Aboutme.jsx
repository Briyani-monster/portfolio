import { keys } from "@mui/system";
import React from "react";
import { skills } from "../data";
const Aboutme = () => {
  return (
    <section className="section aboutme " id="about">
      <h2 className="h4 mb-4">
        <span className="number">02</span> About me
      </h2>
      <div className="aboutme__body grid col-2">
        <div className="aboutme__body__text">
          <p className="body-1 mb-10p">
            Hello!, my name is G S Ashish, a self taught frontend developer.
          </p>
          <p className="body-1 mb-10p">
            The scope of my work is a large part of frontend which includes PSD
            to HTML, design, coding layouts, single page applications,
            responsive websites, web apps, CSS/JS animations, and other work
            based on web development and javascript.
          </p>
          <p className="body-1">
            I like to code things for web, and enjoy bringing ideas to life in
            the browser. I'm always open to adapt to work with team and work on
            new frontend skills and technology.
          </p>
          <div className="skills mt-4">
            <h3 className="h5 mb-2">CURRENT SKILL SETS</h3>
            {Object.keys(skills).map((keys) => {
              return (
                <div className="skill ml-2 ">
                  <span className="h6 mr-5p">
                    {keys} {">"}{" "}
                  </span>
                  {skills[keys].map((val, index) => {
                    return (
                      <span className="single-skill body-2 mr-5p">
                        {val}
                        {index !== skills[keys].length - 1 ? "," : ""}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="aboutme__body__img">
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
