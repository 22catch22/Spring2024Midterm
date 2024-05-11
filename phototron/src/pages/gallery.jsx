import React from "react";
 import { useContext, createContext, useState } from "react";
import Options from "../Components/Options";
 import AddComments from "../Components/addComments";
import Display from "../Components/DisplayPhotos";
 
 
function Gallery()
{
    
 

return(
<>

<div className = "gallary">
<header>
<Options/>
</header>
<div className="photos">
 <Display/>

 
 
 
</div>
</div>
 
 
</>
)
}

export default Gallery;
 