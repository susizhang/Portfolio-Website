import { about } from "../../portfolio/PortfolioData";

import "./About.css";

const About = () => {
  const { name, role, description } = about;

  return (
    <div className="about aboutPage ">
      <div>
        {name && (
          <h1>
            Hi, I am <span className="about__name">{name}.</span>
          </h1>
        )}

        {role && <h2 className="about__role about_title_2">A {role}.</h2>}

        <div className="about__desc">
          <h5 className="text">{description.title1}</h5>
          <p className="text">{description.paragraph1}</p>
          <p className="about-title text">{description.title2}</p>
          <p className="text">{description.paragraph3}</p>
          <p className="text">{description.paragraph4}</p>
          <p className="text">{description.paragraph5}</p>
          <p className="text">{description.paragraph6}</p>
          <p className="text">{description.paragraph7}</p>
        </div>

        {/* <pre className="about__desc">{description && description}</pre> */}
      </div>
    </div>
  );
};

export default About;
