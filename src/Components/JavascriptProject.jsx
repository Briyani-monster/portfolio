import React from "react";
import ProjectFooter from "./ProjectFooter";
import { project } from "../data";
const JavascriptProject = () => {
  return (
    <>
      <div className="section javascriptProject">
        <h3 className="h3">{"<JAVA SCRIPT>"}</h3>
        <div className="javascriptProject_main">
          {project.javascript.data.map((pro, i) => {
            {
              /* single box */
            }
            return (
              <div key={i} className="javascriptProject_main_project">
                <div className="img">
                  <img src={pro.image} alt="" loading="lazy" />
                </div>
                <div className="javascriptProject_main_project_description">
                  <h1 className="h6">{pro.name}</h1>
                  <p className="body-1">{pro.description}</p>
                  <div className="javascriptProject_main_project__links">
                    <a
                      href={pro.github}
                      target="_blank"
                      className="project__link"
                    >
                      GITHUB
                    </a>
                    <a
                      href={pro.link}
                      target="_blank"
                      className="project__link"
                    >
                      LIVE LINK
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ProjectFooter />
    </>
  );
};

export default JavascriptProject;
