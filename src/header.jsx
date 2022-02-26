import React from "react"
import Perfil from "./img/PERFIL.jpg"


function Header () {
    return (
        <div className='header'>
        <div className="navbar"> 
    
        
        <a className='navbar-content'>about</a>
        <a className='navbar-content'>contact me</a>
        <a className='navbar-content'>download cv</a>
        
        </div>
    
        <div className='media'> <img className='perfil' src={Perfil}/></div>
        <div className="header-title"> <h1 className='name'>Joaquín <span>Accorsi</span></h1> </div>
        
        <div className="about">
          <h3 className='skills'>WEB DEVELOPER</h3>
          <h3 className='skills'>DESIGNER</h3>
          <h3 className='skills'>BLOCKCHAIN</h3>
          <h3 className='skills'>CTO</h3>
        </div>
    </div>
        

    );
}
export default Header;