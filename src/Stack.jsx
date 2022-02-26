import React from "react"

import WebDevPic from "./img/webdeveloper.png";



function Stack () {
    return (

        
<div className="FeatureContainer" id="Stack">

    

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

        
    </div>


</div>



    );
}
export default Stack;