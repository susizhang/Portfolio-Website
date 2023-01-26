import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "./ProjectContainer.css";

const ProjectContainer = ({ project, jumpTo }) => {
  return (
    <div className="project">
      <img src={project.imageUrl} alt="project-img" className="project-img" />

      <h3>{project.name}</h3>

      <p className="project__description">{project.description}</p>

      {project.sourceCode && (
        <button
          onClick={() => {
            jumpTo(project.sourceCode);
          }}
          aria-label="source code"
          className="link link--icon"
        >
          <GitHubIcon />
        </button>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          target="_blank"
          rel="noreferrer"
          aria-label="live preview"
          className="link link--icon"
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  );
};

export default ProjectContainer;
