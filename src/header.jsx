import React from "react"
import Perfil from "./img/PERFIL.jpg"
import Emoji from "./img/emoji.png"




function Header () {
    return (
    <div className='header' id="About">

    
      <div className='media'>
        <h2 className="Profile-Title">(profile photo here...)</h2> <br /> <img src={Emoji} alt="emoji" className="emojiheader" />
        <img className='perfil' src={Perfil} alt="profilephoto"/>
      </div>
      <div className="header-title">
        <h2 className="hi">Hi there! <br /> I'm</h2>
        <h1 className='name'>Joaquín <span>Accorsi</span></h1>
      </div>
        
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