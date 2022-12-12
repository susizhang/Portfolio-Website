import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../contexts/Theme";
import { projects } from "../portfolio/PortfolioData";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => {
    setShowNavList(!showNavList);
  };
  return <nav>
    <ul>
        {projects.length? (
            <li>
                <Link to='/project/'>Project 1</Link>
            </li>
        )}
    </ul>
  </nav>;
};

export default Navbar;
