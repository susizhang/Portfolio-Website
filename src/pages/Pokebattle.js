import ProjectsLinks from "./ProjectsLinks";
import "./allProjectPage.css";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const Pokebattle = () => {
  return (
    <div className="projects-container">
      <ProjectsLinks />

      <header className="projects-header">
        <h1>German Mindmap Dictionary</h1>
        <br />
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
        <br />
        <br />
        <p>
          A visual way to make learning German easier, funnier and more
          efficient.
        </p>
        <p>
          This project is trying to visualize a German dictionary as mindmaps,
          so that German learners can learn German words easier, faster and more
          effectively!
        </p>
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
