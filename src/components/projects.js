import res from "./assets/res.png"
import shop from "./assets/shopping.png"
import uclone from "./assets/uclone.png"
const Project=()=>{
    const config={
        Projects:[
            {
                image:res,
                description:'-creating a responsive landing page for a restaurant using HTML and CSS.Simple and  responsive design',
                link1:'https://www.linkedin.com/posts/nandhini-boopalan_codsoft-webdevelopment-activity-7136229729333882882-Cbso?utm_source=share&utm_medium=member_desktop',
            link2:''
        },
            {
                image:uclone,
                description:'Discover the power of the YouTube Clone, a dynamic video streaming platform driven by the YouTube API. The Advance search feature, enhanced by debouncing and intelligent caching, ensures minimal API calls, leading to faster and smoother performance. This YouTube is built with React, Redux, React Router, Tailwind CSS and API. check out the GitHub repository for the code, or experience it live with our demo.',
                link1:'https://www.linkedin.com/feed/update/urn:li:ugcPost:7160872271966871553/',
                link2:'https://github.com/Nandhini-boopalan/youtube-project'
            },
            {
                image:shop,
                description:'Build a product catalogue for an e-commerce website .Implement a shopping cart component to add or remove items .Utilise state management to track cart items and calculate total.',
                link1:'',
                link2:''
            },
           

        ]
    }
    return(
        <section className="flex  flex-col px-5 py-20 justify-center bg-sec text-black" id="project">
<div className="w-full">
    <div className="flex flex-col px-10 py-5">
    <h1 className="text-white text-4xl border-b-4 mb-5  w-[140px] font-bold">Projects</h1>
    <p>These are the some of my best project. ihave buit these with react,tailwind,html,css.Check them out</p>
    </div>

</div>
<div className="w-full">
    <div className="flex flex-col md:flex-row px-10 gap-5">
        {config.Projects.map((project)=>(
            
            <div className="relative">
            <img className="h-[200px] w-[500px]" src={project.image} alt="page"/>
            <div className="project-disc">
                <span className="text-center py-5 px-5">
                  <p className="">{project.description}</p>
                 </span>
                 <div className="flex justify-center gap-2">
                <a className="btn" target='_blank' href={project.link1}>View Project</a>
                <a className="btn" target='_blank' href={project.link2}>Source Code</a>
            </div>
            </div>
            
        </div>
       ))}
        
        
    
    
    
    </div>

</div>
        </section>
        
    )
}
export default Project