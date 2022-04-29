import React from "react";
import { social } from "../data";

const Footer = () => {
  return (
    <div className="project-footer-main">
      <p className="overline">Made with 🍵 and 💻 by G S Ashish</p>
      <ul className="right-footer">
        {social.map((link, i) => (
          <li key={i}>
            <a className="overline" href={link.link}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
