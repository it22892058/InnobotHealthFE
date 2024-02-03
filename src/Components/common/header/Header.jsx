import React from 'react';
import { Navbar } from '../../common';
import logo from './logo.png'
import Search from '../search/Search';
import './Header.css';
console.log(logo);
function Header (){
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
        <section className="header-bottom">
            <section className="header-bottom__phone">
                    99999
            </section>
            <section className="header-bottom__email">
                    shoppr.info@gmail.com
            </section>
        </section>
        </section>
       
    )
}
export default Header;