import { about } from "../../portfolio/PortfolioData";
import { contact } from "../../portfolio/PortfolioData";
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
      {contact.email && (
        <section className="section contact center" id="contact">
          <h2 className="section__title">Contact</h2>
          <a href={`mailto:${contact.email}`}>
            <span type="button" className="btn btn--outline">
              Email me
            </span>
          </a>
        </section>
      )}
    </main>
  );
};

export default Home;
