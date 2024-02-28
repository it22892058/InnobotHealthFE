import React from 'react';
import '../header/Header.css';
import logo from './logo.png'
import { Navbar } from '../../common';
import Search from '../search/Search';
function Topbar() {
  return (
    <div>
      
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
    </div>
  )
}

export default Topbar
