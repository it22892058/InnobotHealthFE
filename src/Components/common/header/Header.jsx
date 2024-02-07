import React from 'react';
import { useState } from 'react';
import { Navbar } from '../../common';
import logo from './logo.png'
import Search from '../search/Search';
import './Header.css';
import { FaInstagram, FaInbox } from "react-icons/fa";
import { BsArrowLeftShort, BsSearch,BsChevronDown, BsReverseLayoutTextSidebarReverse} from 'react-icons/bs';
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineSetting } from 'react-icons/ai';
import { MdPeople } from "react-icons/md";
import {RiDashboardFill} from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
console.log(logo);
function Header (){
  const[open,setOpen]= useState(true);
  const[submenuOpen,setSubmenuOpen]= useState(false);
  const Menus=[
    {title:"Dashboard"},
    {title:"People",icon: <MdPeople/>},
    {title:"Media",spacing:true,icon:<FaInstagram />},
    {title:"Projects",icon:<BsReverseLayoutTextSidebarReverse/>,
     submenu:true,
     submenuItems:[
      {title:"submenu "},
     ],
    },
    {title: "Pages",icon:<AiOutlineFileText/>},
    {title: "Inbox",icon:<FaInbox />},
    {title: "Settings",icon:<AiOutlineSetting/>},
  ];
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
         <RxHamburgerMenu  className={`bg-amber text-4xl rounded cursor-pointer float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>

         
         </div>

         <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2" : "px-4"} py-2`}>
            <BsSearch className={`text-black text-lg block float-left cursor-pointer  ${open && "mr-5"}`}/>
        <input type={"search"} className={`text-base bg-transparent w-full text-black focus:outline-none $(!open && "hidden")`} placeholder="Enter your search"/>
         </div>
        <ul className="pt-2">
          {Menus.map((menu,index)=>(
              <>
              <li key={index} className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-4"} `}>
               <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <RiDashboardFill/>}
               </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                  {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown className={` ${submenuOpen && "rotate-180"}`} onClick={()=>
                       setSubmenuOpen(!submenuOpen)
                      }/>
                  )}
              </li>
              {menu.submenu && submenuOpen && open &&(
                <ul>
                  {menu.submenuItems.map((submenuItem,index)=>(
                    <li key={index} className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md">
                      {submenuItem.title}
                    </li>
                  )
                  )}
                </ul>
              )}
              </>
          ))}
        </ul>


          </div>

        </div>
        
        </section>
       
    )
}
export default Header;