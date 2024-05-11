import AddPhoto from "./addPhotos";
import React from "react";
import Popup from "reactjs-popup";

function addBox()

{

/*This will hold the 'addPhoto' form */
return(

<>

<div id = "addphotobox">

<Popup trigger =

{<button>Add Photo</button>}

modal nested>

{
close => (

<div className="Photomenu">

<div className = "addform">

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

export default addBox;

