import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import { project } from "../data";
import { Link } from "react-router-dom";
const Project = () => {
  const linkdata = {
    javascript: "/project/javascript",
    UI: "/project/uiproject",
    "javascript api": "/project/javascriptapi",
    react: "/project/react",
  };
  return (
    <section className="section project-section" id="project">
      <h2 className="h4 mb-12">
        <span className="number">03</span> Some Things I've Built
      </h2>
      <div className="projects grid col-1">
        {project.main.map((pro, i) => {
          return (
            <div key={i} className="project grid col-2 mb-8">
              <iframe
                className={`iframe-${i + 1}`}
                src={pro.video}
                frameBorder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className={`project-info project-info_${i + 1}`}>
                <h3 className="h4">{pro.name}</h3>
                <div className="project-info__description body-2">
                  {pro.description}
                </div>
                <div className="links body-2">
                  <a href={pro.previous} target="_blank">
                    v1
                  </a>

                  <a href={pro.github} target="_blank">
                    <GitHubIcon />
                  </a>
                  <a href={pro.link} target="_blank">
                    <DesktopWindowsIcon />
                  </a>
                </div>
                <div className="skills">
                  {pro.languages.map((skill, i) => {
                    return (
                      <span className="overline" key={i}>
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="alternate-projects mb-1">
        <h2 className="h4"> Alternate Projects</h2>
        <p className="body-1">
          Some additional projects to check out divided into category wise.
        </p>
        <div className="section alternate-project grid col-2">
          {Object.keys(project).map((key) => {
            const icon = project[key].icon;
            if (key === "main") return;
            return (
              <div className="alternate-project_box">
                <span className="svg">{icon()}</span>

                <h4 className="h4">{key}</h4>
                <p className="body-2">{project[key].description}</p>
                <Link to={linkdata[key]}>
                  <DesktopWindowsIcon />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
