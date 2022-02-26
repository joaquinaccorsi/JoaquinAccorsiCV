import React from 'react';

import IconTwitter from "./img/IconTwitter.png";
import IconLinkedin from "./img/IconLinkedin.png";
import IconGitHub from "./img/signo-de-github.png";


function SocialMedia() {

    return ( 
        <div className='SocialMedia' id='SocialMedia'>
            <h1 className='SocialMedia-Title'>
            ¡CHARLEMOS POR MIS <span>REDES</span>!
            </h1>
         

            <a href='https://github.com/joaquinaccorsi'target="_blank"><img src= {IconGitHub} className='IconGitHub'/></a>
            <a href='https://twitter.com/AccorsiJoaquin'target="_blank"><img src= {IconTwitter} className='IconTwitter'/></a>
            <a href='https://www.linkedin.com/in/joaquinaccorsi'target="_blank"><img src={IconLinkedin} className='IconLinkedin'/></a>
            
        </div>




   );   
  }
  

  
  export default SocialMedia;