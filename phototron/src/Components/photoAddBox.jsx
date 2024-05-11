import React from "react";
import AddPhoto from "./addPhotos";
import { useState } from "react";
import Popup from 'reactjs-popup';
function PhotoAddBox(){
/*This will hold the addphoto form*/
return(
<>

<div id = "Photomenu">

<Popup trigger =

{

<button>Add Photos</button>}

modal nested>

{

close => (

<div className="Photooptions">

<div>

<AddPhoto/>

</div>

<div>

<button onClick={

() => close()}>

Close

</button>

</div>

</div>


 )
 }
 </Popup>   
</div>    
</>
)
};

export default PhotoAddBox;