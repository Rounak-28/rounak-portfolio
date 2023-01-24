import ProjectCard from "./ProjectCard";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects">
      <div className="pt-8">
        <p className="pl-[10%] text-xl text-[#9d94a5]">PROJECTS</p>
        <div className="card flex flex-col items-center">
        <ProjectCard
            title="Social media app"
            description="A social media app where you can post images, reply to posts, like posts etc."
            img="/rounakgram.png"
            codeLink="https://github.com/Rounak-28/rounakgram"
            liveLink="https://rounakgram.vercel.app/"
          />

          <ProjectCard
            title="Youtube clone"
            description="A youtube clone where you can play videos, see the comments, description, likes count etc."
            img="/youtube-clone.jpg"
            codeLink="https://github.com/Rounak-28/windows-11-clone"
            liveLink="https://rounak-os.vercel.app/"
          />

          <ProjectCard
            title="Windows 11 clone"
            description="A simple windows clone where you can use chrome, notepad, settings etc."
            img="/windows-clone.jpg"
            codeLink="https://github.com/Rounak-28/youtube-clone"
            liveLink="https://rk-tube.vercel.app/"
          />

          <ProjectCard
            title="CryptoNews"
            description="A website where you can track price of 100 crypto currencies. You can also get recent top news related to crypto."
            img="/cryptonews.jpg"
            codeLink="https://github.com/Rounak-28/crypto-price-tracker"
            liveLink="https://crypto-price-tracker-seven.vercel.app/"
          />

          <ProjectCard
            title="Twitter Clone"
            description="A twitter clone where you can create account/login and post tweets."
            img="/twitter.jpg"
            codeLink="https://github.com/Rounak-28/twitter-clone"
            liveLink="https://rounak-tweet.vercel.app/"
          />

          <ProjectCard
            title="SpaceX Clone"
            description="A responsive spaceX website clone using ReactJs & TailwindCSS"
            img="/spacex.jpg"
            codeLink="https://github.com/Rounak-28/spacex-clone"
            liveLink="https://rounak-28.github.io/spacex-clone/"
          />

          <ProjectCard
            title="Notes App"
            description="A simple app where you can upload text to database(firebase)."
            img="/notes.jpg"
            codeLink="https://github.com/Rounak-28/notes-app-firebase"
            liveLink="https://notes-app-firebase.vercel.app/"
          />
        </div>
      </div>
    </Element>
  );
};

export default Projects;
