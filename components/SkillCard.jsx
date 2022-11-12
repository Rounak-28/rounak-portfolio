import Box from './Box'
import { AiFillHtml5 , AiFillGithub } from "react-icons/ai"
import { DiCss3 , DiJavascript1 , DiReact } from "react-icons/di"
import { SiNextdotjs , SiTailwindcss , SiExpress , SiMongodb , SiFirebase, SiTypescript } from "react-icons/si"
import { GrNode } from "react-icons/gr"
import { FaGitAlt, FaJava, FaPython, FaBootstrap } from "react-icons/fa"

const SkillCard = () => {
  return (
    <div className="w-[75%] place-items-center h-[370px] lg:h-[400px] my-4 p-3 rounded-lg grid grid-cols-4 gap-x-16 lg:gap-x-3 lg:gap-y-3">
      <Box name="HTML" icon={<AiFillHtml5 className="text-3xl" />}/>
      <Box name="CSS" icon={<DiCss3 className="text-3xl" />}/>
      <Box name="JavaScript" icon={<DiJavascript1 className="text-3xl" />}/>
      <Box name="TypeScript" icon={<SiTypescript className="text-3xl" />}/>
      <Box name="Reactjs" icon={<DiReact className="text-3xl" />}/>
      <Box name="Nextjs" icon={<SiNextdotjs className="text-3xl" />}/>
      <Box name="TailwindCSS" icon={<SiTailwindcss className="text-3xl" />}/>
      <Box name="Firebase" icon={<SiFirebase className="text-3xl" />}/>
      <Box name="MongoDB" icon={<SiMongodb className="text-3xl" />}/>
      <Box name="Git" icon={<FaGitAlt className="text-3xl" />}/>
      <Box name="Github" icon={<AiFillGithub className="text-3xl" />}/>
      <Box name="Bootstrap" icon={<FaBootstrap className="text-3xl" />}/>
      <Box name="Nodejs" icon={<GrNode className="text-3xl" />}/>
      <Box name="ExpressJs" icon={<SiExpress className="text-3xl" />}/>
      <Box name="Python" icon={<FaPython className="text-3xl" />}/>
      <Box name="Java" icon={<FaJava className="text-3xl" />}/>
    </div>
  )
}

export default SkillCard