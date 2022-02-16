import { skillData } from "../../../Data/SkillsData";
import "./SkillCard.css";
const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <img className="skill-icon" src={skill.icon} />
      <label className="skill-name">{skill.name}</label>
    </div>
  );
};

export default SkillCard;
