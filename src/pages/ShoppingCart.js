import ProjectsLinks from "./ProjectsLinks";
import "./allProjectPage.css";

import GitHubIcon from "@mui/icons-material/GitHub";

const ShoppingCart = () => {
  return (
    <div className="projects-container">
      <ProjectsLinks />
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
    </div>
  );
};

export default ShoppingCart;
