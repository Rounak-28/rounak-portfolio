import ProjectCard from "./ProjectCard";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects">
      <div className="pt-8">
        <p className="pl-[10%] text-xl text-[#9d94a5]">PROJECTS</p>
        <div className="card flex flex-col items-center">
          <ProjectCard title="CryptoNews" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error porro praesentium corporis? Nisi voluptates reprehenderit magnam molestiae dolore, id, qui, ex nesciunt neque tempora error impedit sit porro nihil nobis."
          img="/cryptonews.jpg" />

          <ProjectCard title="Twitter Clone" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error porro praesentium corporis? Nisi voluptates reprehenderit magnam molestiae dolore, id, qui, ex nesciunt neque tempora error impedit sit porro nihil nobis."
          img="/twitter.jpg" />

          <ProjectCard title="SpaceX Clone" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error porro praesentium corporis? Nisi voluptates reprehenderit magnam molestiae dolore, id, qui, ex nesciunt neque tempora error impedit sit porro nihil nobis."
          img="/spacex.jpg" />

          <ProjectCard title="Notes App" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error porro praesentium corporis? Nisi voluptates reprehenderit magnam molestiae dolore, id, qui, ex nesciunt neque tempora error impedit sit porro nihil nobis."
          img="/notes.jpg" />
        </div>
      </div>
    </Element>
  );
};

export default Projects;
