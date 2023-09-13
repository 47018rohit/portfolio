import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"
import { technologies } from "../constants"


const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10 ">
      {technologies.map((tech)=>{
        return(
          <div className="w-28 h-28  " key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        )
      })}
    </div>
  )
}

export default SectionWrapper( Tech , 'tech' )