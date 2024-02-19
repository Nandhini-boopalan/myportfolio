import webdev2 from "./assets/web dev2.png"
const About=()=>{
    const config={
        line1:'Detail-oriented front-end developer with strong foundation in HTML,CSS and Javascript,and React js.Recent Graduates committed to creating visually appealing and user-friendly websites.Eager to contribute fresh ideas and a strong work ethic to a collaborative development team.',
        line2:'Tech stack:HTML,CSS,Javascript,React js,Tailwind,Node js,Expressjs,MongoDb'
       
    }
    return(
        <section className="flex flex-col md:flex-row bg-primary px-5" id="about">
<div className="py-5 md:w-1/2">
<img  className="w-2/3"src={webdev2} alt="about"/>
</div>
<div className="md:w-1/2 flex justify-center">
    <div className="flex flex-col  justify-center">
    <h1 className="text-white text-4xl border-b-4 mb-5  w-[170px] font-bold">About Me</h1>
    <p>{config.line1}</p>
    <p className="py-4">{config.line2}</p>
    </div>
    
</div>
        </section>
        
    )
}
export default About