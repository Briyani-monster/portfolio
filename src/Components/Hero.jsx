import React from "react";
import logo from "../images/main.webp";
import wave from "../images/wave.png";
import Resume from "../Resource/GS_ASHISH_Resume.pdf";

const Hero = () => {
  return (
    <section className="section hero">
      <div className="profile-pic">
        <img src={logo} className="profile-pic__img" alt="profile pic" />
      </div>
      <div className="hero__text">
        <h5 className="body-1">
          Hello!{" "}
          <span className="wave">
            <img src={wave} alt="wave png" loading="lazy" />
          </span>
          I am <span className="dash"></span>
        </h5>
        <h1 className="h3">G S Ashish</h1>
        <h1 className="h3 mb-4">{"<FRONTEND DEVELOPER/>"}</h1>
        <p className="body-1 mb-10p">
          I design and build quality responsive websites, clean user interfaces
          and rich interactive web apps. Targeting{" "}
          <span className="link">React</span>,{" "}
          <span className="link">Javascript</span> and other web development
          opportunities.
        </p>
        <p className="body-1">
          I'm open to learning, adapt to work with the team, freelance
          opportunities, contract jobs and use skills to solve complex UI
          challenges and provide value to the growth of an organization.
        </p>
      </div>
      <div className=" mt-4 cta body-1">
        <a href={Resume} target="_blank">
          Grab my Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
