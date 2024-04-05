import React from 'react'
import logo from '../../Images/logo 3.png'
import searchIcon from '../../Images/icons8-search-30 (1).png'
import darkmode from '../../Images/sleep-mode.png'
import help from '../../Images/help-web-button.png'
import notifications from '../../Images/bell.png'
import messages from '../../Images/paper-plane.png'
import dropdownButton from '../../Images/down-arrow.png'
import './Header.css'


const Header = () => {
  return (
    <div class="container">
        <div className="left-header">
            <img src={logo} class="logo left-header-items"></img>
            <input placeholder='Search fithub' class="left-header-items"></input>
        </div>
        <div className="right-header">
            <div className="right-header-1">
            <div class="icon-container"><img className="right-header-icons" src={darkmode}></img></div>
            <div class="icon-container"><img className="right-header-icons" src={messages}></img></div>
            <div class="icon-container"><img className="right-header-icons" src={notifications}></img></div>
            <div class="icon-container"><img className="right-header-icons" src={help}></img></div>
            
            </div>
            <div className="right-header-2">
                <div class="dropdown right-header-profile-name">
                            <button class="username">Ayushi Narang
                            <img src={dropdownButton} class="dropdown-icon"></img></button>
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-custom-content">English - EN</a>
                                <hr class="dropdown-hr"></hr>
                                <a href="#" class="dropdown-custom-content">Hindi - HN</a>
                                <a href="#" class="dropdown-custom-content">Marathi - MR</a>
                                <a href="#" class="dropdown-custom-content">Bengali - BN</a>
                            </div>
                        </div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
