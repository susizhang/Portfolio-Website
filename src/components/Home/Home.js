import { about } from "../../portfolio/PortfolioData";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = ({ jumpTo }) => {
  const { name, role } = about;
  return (
    <main>
      <div className="about center">
        {name && (
          <h1>
            Hi, I am <span className="about__name">{name}.</span>
          </h1>
        )}

        {role && <h2 className="about__role about_title_2">A {role}.</h2>}
      </div>

      <Projects jumpTo={jumpTo} />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;
