import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'


const Header=()=>{
    const [toggleMenu,setToggleMenu]=useState(false)
    return(
        <header className="flex justify-between px-5 py-2 bg-primary">
<a className="font-bold text-bold" href="#">Nandhini B</a>
<nav className="hidden md:block">
<ul className="flex text-blue-600">
    <li><a href="/">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#project">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
</nav>
{toggleMenu && <nav className="block md:hidden ">
<ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-blue-600 mobile-nav">
    <li><a href="/">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#project">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
</nav>}
<button onClick={()=>setToggleMenu(!toggleMenu)}className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>

        </header>
    )
}
export default Header