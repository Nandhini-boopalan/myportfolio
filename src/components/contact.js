
const contact=()=>{
    const config={
        email:'nanthiniboopalan@gmail.com',
        phone:'9597551230',
    }
    return(
        <section className="flex flex-col  bg-sec px-5 py-32" id="contact">

<div className="flex  flex-col items-center">
   
    <h1 className="text-white text-4xl border-b-4 mb-5  w-[140px] font-bold">Contact</h1>
    <p>If you want to know more about me...please contact</p>
    <p className="py-2"><span className="font-bold ">Email:</span>{config.email}</p>
    <p className="py-2"><span className="font-bold ">Phone</span>{config.phone}</p>
    </div>
    

        </section>
        
    )
}
export default contact