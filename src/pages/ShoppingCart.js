import ProjectsLinks from "./ProjectsLinks";
import "./allProjectPage.css";

import GitHubIcon from "@mui/icons-material/GitHub";

const ShoppingCart = () => {
  return (
    <div className="projects-container">
      <ProjectsLinks />

      <header className="projects-header">
        <h1>German Mindmap Dictionary</h1>
        <br />
        <h4>
          <a
            href="https://github.com/susizhang/React-ts-Shopping-Cart"
            target="_blank"
            rel="noreferrer"
            aria-label="live preview"
          >
            <GitHubIcon />
            Github page
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
        <img src="/imgs/ts-shopping-cart.png" alt="" className="projects-img" />
        <img
          src="/imgs/ts-shopping-cart2.png"
          alt=""
          className="projects-img"
        />
      </main>
    </div>
  );
};

export default ShoppingCart;
