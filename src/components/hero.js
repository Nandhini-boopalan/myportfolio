import heroimg from "../components/assets/cropped img.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Hero=()=>{
    const config={
        subtitle:'Full stack Developer',
        social:{
            linkedin:'www.linkedin.com/in/nandhini-boopalan',
            github:'https://github.com/Nandhini-boopalan'
        }
    }
    return(
       <section className="flex flex-col md:flex-row px-5 py-32 bg-sec justify-center" >
        <div className="md:w-1/2 flex flex-col ">
        <h1 className=" text-white text-4xl">Hi,<br/> I am Nandhini
        <p className="text-2xl">{config.subtitle}</p></h1>
        <div className="flex py-10 gap-5">
            <a className="px-4 py-2 font-bold border black bg-white rounded"href="#project">Projects</a>
            <a className="px-4 py-2 font-bold border black bg-white rounded" href="#contact">Contact</a>
        </div>
        <div className="flex py-0">
            <a target='_blank' href={config.social.linkedin} className="pr-5 hover:text-white"><FaLinkedin size={40}/></a>
            <a target='_blank' href={config.social.github} className="pr-5  hover:text-white"><FaGithub size={40}/></a>
        </div>
        </div>
        
        <img className="md:w-1/3 h-1/4 " src={heroimg} alt="pic"/>
       </section>
    )
}
export default Hero