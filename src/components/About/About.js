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
          <h5>{description.title1}</h5>
          <p>{description.paragraph1}</p>
          <h5>{description.title2}</h5>
          <p>{description.paragraph3}</p>
          <p>{description.paragraph4}</p>
          <p>{description.paragraph5}</p>
          <p>{description.paragraph6}</p>
          <p>{description.paragraph7}</p>
        </div>

        {/* <pre className="about__desc">{description && description}</pre> */}
      </div>
    </div>
  );
};

export default About;
