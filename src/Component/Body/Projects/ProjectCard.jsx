import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { title, about, image, demo, github,tags } = project;
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{title}</label>
        <div className="project-links">
          {demo && (
            <a className="project-link" href={demo}>
              <div className="link-button">
                <img src="https://img.icons8.com/material-outlined/30/000000/globe--v2.png" />
                Demo
              </div>
            </a>
          )}
          {github && (
            <a className="project-link" href={github}>
              <div className="link-button">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />{" "}
                Github
              </div>
            </a>
          )}
        </div>
        <p>{about}</p>
        <div className="project-tags">
          {tags.map((tag=>{
            return (
              <label className="tag">
                  {tag}
              </label>
            )
          }))}
        </div>
      </div>
      <img src={image} className="project-photo" />
    </div>
  );
};

export default ProjectCard;
