import "./allProjectPage.css";
import ProjectsLinks from "./ProjectsLinks";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const Mindmap = () => {
  return (
    <div className="projects-container">
      <ProjectsLinks />
      <header className="projects-header">
        <h1>German Mindmap Dictionary</h1>
        <br />
        <h4>
          <a
            href="https://github.com/susizhang/German_Mindmap_Dictionary_frontend"
            target="_blank"
            rel="noreferrer"
            aria-label="live preview"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://german-dictionary-mindmap.netlify.app/home"
            target="_blank"
            rel="noreferrer"
            aria-label="live preview"
          >
            <LaunchIcon />
            german-dictionary-mindmap
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
        <img src="/imgs/0.jpg" alt="" className="projects-img" />
        <img src="/imgs/1.jpg" alt="" className="projects-img" />
        <img src="/imgs/2.jpg" alt="" className="projects-img" />
        <img src="/imgs/3.jpg" alt="" className="projects-img" />
        <img src="/imgs/4.jpg" alt="" className="projects-img" />
        <img src="/imgs/5.jpg" alt="" className="projects-img" />
        <img src="/imgs/6.jpg" alt="" className="projects-img" />
        <img src="/imgs/7.jpg" alt="" className="projects-img" />
        <img src="/imgs/8.jpg" alt="" className="projects-img" />
        <img src="/imgs/9.jpg" alt="" className="projects-img" />
        <img src="/imgs/10.jpg" alt="" className="projects-img" />
        <img src="/imgs/11.jpg" alt="" className="projects-img" />
        <img src="/imgs/12.jpg" alt="" className="projects-img" />
        <img src="/imgs/13.jpg" alt="" className="projects-img" />
        <img src="/imgs/14.jpg" alt="" className="projects-img" />
        <img src="/imgs/15.jpg" alt="" className="projects-img" />
        <img src="/imgs/16.jpg" alt="" className="projects-img" />
        <img src="/imgs/18.jpg" alt="" className="projects-img" />
        <img src="/imgs/19.jpg" alt="" className="projects-img" />
        <img src="/imgs/20.jpg" alt="" className="projects-img" />
        <img src="/imgs/21.jpg" alt="" className="projects-img" />
        <img src="/imgs/22.jpg" alt="" className="projects-img" />
        <img src="/imgs/23.jpg" alt="" className="projects-img" />
        <img src="/imgs/24.jpg" alt="" className="projects-img" />
        <img src="/imgs/25.jpg" alt="" className="projects-img" />
        <img src="/imgs/17.jpg" alt="" className="projects-img" />
      </main>
    </div>
  );
};

export default Mindmap;
