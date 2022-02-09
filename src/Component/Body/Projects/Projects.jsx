import './Projects.css'

import {ProjectData} from '../../../Data/projects'
import ProjectCard from './ProjectCard';
import Separator from '../../Common/Separator/Separator'

const Projects = () => {
  const data = ProjectData;
  return (

    <div className="projects">
      <Separator />
      <label>Projects</label>
      <div className="section-title">
        {data.map((project)=>{
          return <ProjectCard project={project} />
        })}
      </div>
    </div>
  )

};

export default Projects;
