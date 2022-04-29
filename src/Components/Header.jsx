import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// images
import "../images/profilepic.png";
// resume
import Resume from "../Resource/GS_ASHISH_Resume.pdf";
export const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <span className="icon mail">
          <EmailOutlinedIcon />
        </span>
        <a className="body-2" href="mailto:gsashishemail@gmail.com">
          gsashishemail@gmail.com
        </a>
      </div>

      <ul className="header__right">
        <li>
          <a href="#about" className="body-2">
            About
          </a>
        </li>
        <li>
          <a href="#project" className="body-2">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" className="body-2">
            Contact
          </a>
        </li>
        <li className="cta">
          <a href={Resume} target="_blank" className="body-2">
            {"Resume/>"}
          </a>
        </li>
      </ul>
    </header>
  );
};
