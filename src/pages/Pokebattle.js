import ProjectsLinks from "./ProjectsLinks";
import "./allProjectPage.css";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const Pokebattle = () => {
  return (
    <div className="projects-container">
      <ProjectsLinks />
      <h4>
        <a
          href="https://github.com/susizhang/pokemon_frontend"
          target="_blank"
          rel="noreferrer"
          aria-label="live preview"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://pokefightgame.netlify.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="live preview"
        >
          <LaunchIcon />
          Pokebattle game
        </a>
      </h4>
    </div>
  );
};

export default Pokebattle;
