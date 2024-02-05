import React from 'react';
import { useState } from 'react';
import { Navbar } from '../../common';
import logo from './logo.png'
import Search from '../search/Search';
import './Header.css';
import { BsArrowLeftShort } from 'react-icons/bs';
import { AiFillEnvironment } from 'react-icons/ai';

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
          <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>Sidebar
         <BsArrowLeftShort
         className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer
          ${
            !open && "rotate-180"
         }`}
         onClick={() => setOpen(!open)}
         />
         <div>
          <AiFillEnvironment/>
         </div>
          </div>

        </div>
        
        </section>
       
    )
}
export default Header;