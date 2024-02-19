import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
const Footer=()=>{
    return(
<div className="py-4 bg-primary text-center text-white">
created by Nandhiniboopalan web Developer <br/>
<span className="flex justify-center ">
    <div className="py-1" >created using</div>
    <div className="px-2 py-2"><FaReact /></div>
    <div className="px-2 py-2"><SiTailwindcss /></div>

</span>

</div>
    )
}
export default Footer