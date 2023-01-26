import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { ThemeContext } from "../../contexts/Theme";
import { about, contact, projects } from "../../portfolio/PortfolioData";
import "./Navbar.css";
import Pdf from "../../portfolio/Susi Zhang resume (English).pdf";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);
  const { resume, social } = about;

  const toggleNavList = () => {
    setShowNavList(!showNavList);
  };
  const jumpTo = (url) => {
    const newTab = window.open("_black");
    newTab.location.href = url;
  };
  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {
          <li className="nav__list-item">
            <Link className="link link--nav" onClick={toggleNavList} to="/">
              Home
            </Link>
          </li>
        }

        {projects.length ? (
          <li className="nav__list-item">
            <Link
              className="link link--nav"
              onClick={toggleNavList}
              to="/german-mindmap-dictionary"
            >
              Projects
            </Link>
          </li>
        ) : null}

        {about.name.length ? (
          <li className="nav__list-item">
            <Link
              onClick={toggleNavList}
              className="link link--nav"
              to="/about"
            >
              About
            </Link>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <Link
              onClick={toggleNavList}
              className="link link--nav"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        ) : null}
      </ul>

      <div className="nav-right-icon">
        <button
          type="button"
          onClick={toggleTheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
        >
          {themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
        {social && (
          <>
            {social.github && (
              <button
                onClick={() => {
                  jumpTo(social.github);
                }}
                aria-label="github"
                className="btn btn--icon"
              >
                <GitHubIcon />
              </button>
            )}

            {social.linkedin && (
              <button
                onClick={() => {
                  jumpTo(social.linkedin);
                }}
                aria-label="linkedin"
                className="btn btn--icon"
              >
                <LinkedInIcon />
              </button>
            )}
          </>
        )}
      </div>

      {resume && (
        <a
          href={Pdf}
          target="_blank"
          rel="noreferrer"
          className="btn btn--outline"
        >
          Resume
        </a>
      )}

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
