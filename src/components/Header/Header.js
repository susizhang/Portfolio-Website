import { Link } from "react-router-dom";
import { header } from "../../portfolio/PortfolioData";
import Navbar from "../nav/Navbar";
import "./Header.css";
const Header = () => {
  const { homepage, title } = header;
  return (
    <header className="header center">
      <h3>{homepage ? <Link to="/">{title}</Link> : title}</h3>
      <Navbar />
    </header>
  );
};

export default Header;
