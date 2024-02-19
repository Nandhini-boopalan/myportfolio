import resumeeditpic from "./assets/resumeeditpic.jpg"
const Resume=()=>{
    const config={
        link:'https://docs.google.com/document/d/1FXGLb_xhydwoFuq2DiPu_l4og-7W-JPd/edit'
    }
    return(
        <section className="flex flex-col md:flex-row bg-primary px-5" id="resume">
<div className="py-5 md:w-1/2 flex justify-center md:justify-end">
<img  className="w-[300px]"src={resumeeditpic} alt="about"/>
</div>
<div className="md:w-1/2 flex justify-center">
    <div className="flex flex-col  justify-center">
    <h1 className="text-white text-4xl border-b-4 mb-5  w-[140px] font-bold">Resume</h1>
    <p>You can view my Resume<a className="btn" href={config.link}>Download</a></p>
    </div>
    
</div>
        </section>
        
    )
}
export default Resume