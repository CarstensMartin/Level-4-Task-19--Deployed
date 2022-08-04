import React from 'react'
import Menu from './Menu';
import logo from './images/suitelogoOnly.png';

// Display company name and logo
// Call Menu function inside div
function Header() {
  return (
    <header>
      <div className="gridHeader" >

        <div className="headerH3">
          <h2> Best Mens Clothing </h2>
        </div>
        <div>
          <img src={logo} className="headerLogo" alt="logo" /> 
        </div>
        <div >
          <Menu/>
        </div>
              
      </div>
      <br/>
    </header>
        
  )
}

export default Header