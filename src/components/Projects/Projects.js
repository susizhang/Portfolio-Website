import uniqid from "uniqid";
import { projects } from "../../portfolio/PortfolioData";
import ProjectContainer from "../ProjectContainer/ProjectContainer";

import "./Projects.css";

const Projects = ({ jumpTo }) => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} jumpTo={jumpTo} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
