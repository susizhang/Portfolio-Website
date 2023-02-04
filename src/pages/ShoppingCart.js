import ProjectsLinks from "./ProjectsLinks";
import "./allProjectPage.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ShoppingCart = () => {
  return (
    <div className="projects-container">
      <ProjectsLinks />

      <header className="projects-header">
        <h1>Shopping Cart Typescript</h1>

        <h4 className="web-link-container">
          <a
            href="https://github.com/susizhang/React-ts-Shopping-Cart"
            target="_blank"
            rel="noreferrer"
            aria-label="live preview"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://shoppingcartts.netlify.app/store"
            target="_blank"
            rel="noreferrer"
            aria-label="live preview"
          >
            <LaunchIcon />
          </a>
          <a
            href="https://shoppingcartts.netlify.app/store"
            target="_blank"
            rel="noreferrer"
            aria-label="live preview"
            className="website-link"
          >
            Shopping Cart Typescript
          </a>
        </h4>

        <p className="text">
          This project is a fully functional shopping cart using Vite,React,
          TypeScript, and Bootstrap.
        </p>
        <p className="text">
          Users can add, increase, decrease, delete products to Shopping Cart.
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
