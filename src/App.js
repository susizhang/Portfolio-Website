import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./contexts/Theme";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div className={`${themeName} app`}>
      {/* <Header /> */}
      <h1>Hello</h1>
      <main>
        {/* <About />
        <Projects />
        <Skills />
        <Contact /> */}
      </main>
      <ScrollToTop smooth />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
