import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

const Projects = () => {
  const projectData = [
    {
      src: require("./images/undraw_Calculator_0evy.svg"),
      alt: "Retirement Planning Calculator",
      url: "/retire-cal",
      title: "Retirement Planning",
    },
    {
      src: require("./images/undraw_predictive_analytics_kf9n.svg"),
      alt: "Under Development",
      url: "/not-found",
      title: "Future Project",
    },
  ];

  return (
    <section>
      <div id="projects" className="pjs752section">
        <h1 className="pjs752title">Projects</h1>
        <div className="pjs752container">
          {projectData.map((project) => (
            <div key={project.title} className="pjs752image-container">
              <h2>{project.title}</h2>
              <Link to={project.url}>
                <img
                  className="pjs752img"
                  src={project.src}
                  alt={project.alt}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
