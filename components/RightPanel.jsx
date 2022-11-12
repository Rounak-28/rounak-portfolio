import Contact from "./Contact"
import Projects from "./Projects"
import Skills from "./About"

const RightPanel = () => {
  return (
    <div className="md:w-1/2 md:ml-[50%]">
        <Projects />
        <Skills />
        <Contact />
    </div>
  )
}

export default RightPanel