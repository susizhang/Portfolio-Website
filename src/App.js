import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./contexts/Theme";
// import ScrollToTop from "react-scroll-to-top";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      {/* <ScrollToTop smooth className="scroll-top" /> */}
      <Footer />
    </div>
  );
}

export default App;
