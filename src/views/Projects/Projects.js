import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

const Projects = () => {
  const projectData = [
    {
      src: require("assets/undraw_Calculator_0evy.svg"),
      alt: "Retirement Planning Calculator",
      url: "/retire-cal",
      title: "Retirement Planning",
    },
    {
      src: require("assets/undraw_predictive_analytics_kf9n.svg"),
      alt: "Under Development",
      url: "/not-found",
      title: "Future Project",
    },
  ];

  return (
    <section>
      <div id="projects">
        <h1 className="pjs89title">Projects</h1>
        <div className="pjs90container">
          {projectData.map((project) => (
            <div key={project.title} className="pjs91image-container">
              <h2>{project.title}</h2>
              <Link to={project.url}>
                <img className="pjs92img" src={project.src} alt={project.alt} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
