import React from 'react';
import { useState } from 'react';
import { Navbar } from '../../common';
import logo from './logo.png'
import Search from '../search/Search';
import './Header.css';
import { BsArrowLeftShort, BsSearch } from 'react-icons/bs';
import { AiFillEnvironment } from 'react-icons/ai';
import { MdPeople } from "react-icons/md";
console.log(logo);
function Header (){
  const[open,setOpen]= useState(true);
    return(
        <section className="header">
           <section className="header-top">
            
            <section className="header-top__logo">
              {/*<a href="/" className="header-logo">LOGO</a>*/}
              <img src={logo} alt="Logo" />

            </section>
           
            <section className="header-top__navbar">
           
            
          <section className="header-top__navigation">
          
              <Search/>
            
            <Navbar />
          </section>
         
        </section>
      </section>
      
        <div className="flex">
          <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
          <BsArrowLeftShort
  className={`bg-amber text-03989e text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer
    ${!open && "rotate-180"}`}
  onClick={() => setOpen(!open)}
/>
        
         <div className="inline-flex">
         <MdPeople className={`bg-amber text-4xl rounded cursor-pointer float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>

         
         </div>

         <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-4" : "px-2.5"} py-2`}>
            <BsSearch className="text-black text-lg block float-left cursor-pointer  mr-5"/>
        <input type={"search"} className={`text-base bg-transparent w-full text-black focus:outline-none $(!open && "hidden")`} placeholder="Enter your search"/>
         </div>
          </div>

        </div>
        
        </section>
       
    )
}
export default Header;