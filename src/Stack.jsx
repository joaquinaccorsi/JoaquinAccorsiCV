import React from "react"

import WebDevPic from "./img/webdeveloper.png";
import DesignerPic from "./img/diseno-grafico.png"
import BlockchainPic from "./img/blockchain.png"
import CTOPic from "./img/chief.png"
import OTHERPic from "./img/idea.png"


function stack () {
    return (

  <>      

<h2 className="Section-Title">stack</h2>
<div className="FeatureContainerWD" id="Stack">

   

    

    <div className="container_image">
         <h2 className="Feature-Title">WEB <span>DEVELOPER</span></h2> <img src={WebDevPic} alt="web developer" className="WebDevPic" />
    </div>

    <div className="container_feature">
        <h4 className="Feature-Text">javascript</h4>
        <h4 className="Feature-Text">html</h4>
        <h4 className="Feature-Text">css</h4>
        <h4 className="Feature-Text">react js</h4>
        <h4 className="Feature-Text">node js</h4>
        <h4 className="Feature-Text">bootstrap</h4>
        <h4 className="Feature-Text">api's</h4>
        <h4 className="Feature-Text">seo</h4>

        
    </div>

 



</div>

<div className="FeatureContainerDESIGNER">

    <div className="container_image">
         <h2 className="Feature-Title"><span>DESIGNER</span></h2> <img src={DesignerPic} alt="designer" className="WebDevPic" />
    </div>

    <div className="container_feature">
        <h4 className="Feature-Text">adobe photoshop</h4>
        <h4 className="Feature-Text">adobe illustrator</h4>
        <h4 className="Feature-Text">ux/ui</h4>
        <h4 className="Feature-Text">figma</h4>
        <h4 className="Feature-Text">brand design</h4>


        
    </div>
</div>

<div className="FeatureContainerBLOCKCHAIN">
    
    <div className="container_image">
        <h2 className="Feature-Title">BLOCKCHAIN</h2> <img src={BlockchainPic} alt="blockchain" className="WebDevPic" />
    </div>

    <div className="container_feature">


        <h4 className="Feature-Text">fundamentals</h4>
        <h4 className="Feature-Text">protocols</h4>
        <h4 className="Feature-Text">economy</h4>
        <h4 className="Feature-Text">solidity</h4>
        <h4 className="Feature-Text">web3</h4>
        <h4 className="Feature-Text">dapps</h4>
        <h4 className="Feature-Text">nft's</h4>

    </div>
</div>

<div className="FeatureContainerCTO">
    
    <div className="container_image">
        <h2 className="Feature-Title"><span>CTO</span></h2> <img src={CTOPic} alt="cto" className="WebDevPic" />
    </div>

    <div className="container_feature">


        <h4 className="Feature-Text">positive leader</h4>
        <h4 className="Feature-Text">excelent relationship</h4>
        <h4 className="Feature-Text">critical think</h4>
        <h4 className="Feature-Text">research</h4>
        <h4 className="Feature-Text">economy</h4>
        <h4 className="Feature-Text">sales skills</h4>
        

    </div>


</div>
<div className="FeatureContainerOTHERS">
    
    <div className="container_image">
        <h2 className="Feature-Title"><span>BONUS</span> TRACK</h2> <img src={OTHERPic} alt="bonustrack" className="WebDevPic" />
    </div>

    <div className="container_feature">


        <h4 className="Feature-Text">english proficency b1</h4>
        <h4 className="Feature-Text">bussines vision</h4>
        <h4 className="Feature-Text">technology lover</h4>
        <h4 className="Feature-Text">looking for relocation</h4>
        <h4 className="Feature-Text">committed to work</h4>
        <h4 className="Feature-Text">self critical</h4>
        <h4 className="Feature-Text">proactive</h4>
        
        

    </div>


</div>

</>

    );
}
export default stack;