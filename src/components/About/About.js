import { about } from "../../portfolio/PortfolioData";

import "./About.css";

const About = () => {
  const { name, role, description } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role about_title_2">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>
    </div>
  );
};

export default About;
