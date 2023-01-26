import { NavLink } from "react-router-dom";

const ProjectsLinks = () => {
  return (
    <div className="projects-links">
      <NavLink
        to="/german-mindmap-dictionary"
        className="btn project-btn"
        style={({ isActive }) => ({
          backgroundColor: isActive ? " var(--clr-primary)" : "",
          color: isActive ? "var(--clr-bg)" : "var(--clr-primary)",
        })}
      >
        German Mindmap Dictionary
      </NavLink>
      <NavLink
        to="/Shopping-Cart"
        className="btn project-btn"
        style={({ isActive }) => ({
          backgroundColor: isActive ? " var(--clr-primary)" : "",
          color: isActive ? "var(--clr-bg)" : "var(--clr-primary)",
        })}
      >
        Shopping-Cart-Typescript
      </NavLink>
      <NavLink
        to="/Pokebattle"
        className="btn project-btn"
        style={({ isActive }) => ({
          backgroundColor: isActive ? " var(--clr-primary)" : "",
          color: isActive ? "var(--clr-bg)" : "var(--clr-primary)",
        })}
      >
        Pokebattle game
      </NavLink>
    </div>
  );
};

export default ProjectsLinks;
