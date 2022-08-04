import React,{useState} from 'react'
import {Link} from 'react-router-dom';


function Menu() {

   // Declare the states of each item on the menu
    const[showHome,setShowHome] = useState(false);
    const[showShopping, setShowShopping] = useState(true);
    const[showProfile, setShowProfile] = useState(true);
    const[showAbout, setShowAbout] = useState(true);
    const[showLegal, setShowLegal] = useState(true);
    const[showCalculator, setShowCalculator] = useState(true);

    // Declare different displays activated and deactivated with functions based on button clicked
    const homeShow = (
        <Link to="/"  ><button className="menuButton" onClick={()=>{setShowHome(false); setShowShopping(true); setShowProfile(true); setShowAbout(true); setShowLegal(true); setShowCalculator(true)}}>HOME</button></Link>
     );
     
     const shoppingShow = (
        <Link to="/shopping" ><button className="menuButton" onClick={()=>{setShowHome(true); setShowShopping(false); setShowProfile(true); setShowAbout(true); setShowLegal(true); setShowCalculator(true)}}>SHOPPING</button></Link>
     );
     
     const profileShow = (
        <Link to="/profile"><button className="menuButton" onClick={()=>{setShowHome(true); setShowShopping(true); setShowProfile(false); setShowAbout(true); setShowLegal(true); setShowCalculator(true)}}>PROFILE</button></Link>
     );
 
     const aboutShow = (
        <Link to="/about" ><button className="menuButton" onClick={()=>{setShowHome(true); setShowShopping(true); setShowProfile(true); setShowAbout(false); setShowLegal(true); setShowCalculator(true)}}>ABOUT</button></Link>
     );
 
     const legalShow = (
        <Link to="/legal" ><button className="menuButton" onClick={()=>{setShowHome(true); setShowShopping(true); setShowProfile(true); setShowAbout(true); setShowLegal(false); setShowCalculator(true)}}>LEGAL</button></Link>
     );

     const calculatorShow = (
      <Link to="/calculator" ><button className="menuButton" onClick={()=>{setShowHome(true); setShowShopping(true); setShowProfile(true); setShowAbout(true); setShowLegal(true); setShowCalculator(false)}}>CALCULATOR</button></Link>
   );
 

   // Return the buttons that is true and hide the page button that is clicked on
  return (
    <div className="gridHeaderLogoButtons">
       <nav>
        {showHome?homeShow:null} 
        {showShopping?shoppingShow:null}
        {showProfile?profileShow:null}
        {showAbout?aboutShow:null}
        {showLegal?legalShow:null}
        {showCalculator?calculatorShow:null}
        </nav>
    </div>
  )
}

export default Menu