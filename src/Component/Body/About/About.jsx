import "./About.css";
import coding from "../../../Assets/Coding.png";
import SocialContact from "../../Common/SocialContact/SocialContact";

const About = () => (
  <div className="about">
    <div className="about-top">
      <div className="about-info">
        Hello There 👋, <br /> I am <br />
        <span className="info-name"> Neeraj Balodi.</span>
        <br /> I love experimenting with web.
      </div>
      <div className="about-photo">
        <img src={coding} className="picture" />
      </div>
    </div>
    <div className="about-bottom"><SocialContact/></div>
  </div>
);

export default About;
