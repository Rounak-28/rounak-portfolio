import SkillCard from "./SkillCard"
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name="about">
    <div className="pt-8">
      <p className="pl-[10%] text-xl text-[#9d94a5]">About</p>
      <div className="card flex flex-col items-center">
        <SkillCard />
      </div>
    </div>
    </Element>
  )
}

export default About