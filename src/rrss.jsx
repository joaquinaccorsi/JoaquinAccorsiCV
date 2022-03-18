import React from 'react';

import IconTwitter from "./img/IconTwitter.png";
import IconLinkedin from "./img/IconLinkedin.png";
import IconGitHub from "./img/signo-de-github.png";
import IconEmail from "./img/email.png"


function SocialMedia() {

    return ( 
        <div className='SocialMedia' id='SocialMedia'>
            <h1 className='SocialMedia-Title'>
            LET'S CHAT <span>PRIVATELY</span>!
            </h1>
         

            <a href='https://github.com/joaquinaccorsi'target="_blank"><img src= {IconGitHub} className='IconGitHub'/></a>
            <a href='https://twitter.com/AccorsiJoaquin'target="_blank"><img src= {IconTwitter} className='IconTwitter'/></a>
            <a href='https://www.linkedin.com/in/joaquinaccorsi'target="_blank"><img src={IconLinkedin} className='IconLinkedin'/></a>
            <a href='mailto:joaquinaccorsi@gmail.com'target="_blank"><img src={IconEmail} className='IconEmail'/></a>
            
        </div>
    );   
}
  

  
export default SocialMedia;