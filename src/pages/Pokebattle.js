import ProjectsLinks from "./ProjectsLinks";
import "./allProjectPage.css";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const Pokebattle = () => {
  return (
    <div className="projects-container">
      <ProjectsLinks />

      <header className="projects-header">
        <h1>PokeBattle game</h1>
        <br />
        <h4 className="web-link-container">
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
          </a>
          <a
            href="https://pokefightgame.netlify.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="live preview"
            className="website-link"
          >
            Pokebattle game
          </a>
        </h4>
        <br />
        <br />
        <p className="text">
          This is a full-stack Pokefight application using React, MongoDB,
          React-Router and Tailwindcss.
        </p>
        <p className="text">User can also check Battle history.</p>
      </header>
      <main>
        <img src="/imgs/pokefight .png" alt="" className="projects-img" />
        <img src="/imgs/pokefight2 .png" alt="" className="projects-img" />
        <img src="/imgs/pokefight3 .png" alt="" className="projects-img" />
      </main>
    </div>
  );
};

export default Pokebattle;
