import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./contexts/Theme";
// import ScrollToTop from "react-scroll-to-top";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  const [{ themeName }] = useContext(ThemeContext);
  const jumpTo = (url) => {
    const newTab = window.open("_blank");
    newTab.location.href = url;
  };

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home jumpTo={jumpTo} />} />
        <Route path="/projects" element={<Projects jumpTo={jumpTo} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <ScrollToTop smooth className="scroll-top" /> */}
      <Footer />
    </div>
  );
}

export default App;
