import React, { useState } from 'react';
import logo from '../common/header/logo.png'
import icon_prof from '../ClaimManage/icon_prof.png'
import notify from '../ClaimManage/notify.png'
import '../../App.css'
import '../ClaimManage/ClaimForm.css'

import { Link } from 'react-router-dom';

function OverviewClaim () {

    const myProf = () => {
      console.log("CLICKED");
    }
    const myNotifications = () => {
      console.log("CLICKED");
    }

    return (

    <body>
        <div className="top">
              <div className="logo">
                  <img className="logo" src={logo} alt='logo'/>
                  <h4 className='h4'></h4>
              </div>

              <div className="d">
                <img className="profButton" src={notify} alt='notify' onClick={myNotifications} />
                <img className="profButton" src={icon_prof} alt='icon_prof' onClick={myProf} />
              </div>
        </div>

        <div className="side-nav">



        </div>


    </body>

    );

}

export default OverviewClaim;