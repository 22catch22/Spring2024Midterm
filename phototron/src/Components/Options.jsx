import React from "react";
import ChangeColor from "./changeColor";
import Popup from 'reactjs-popup';
import PhotoAddBox from "./photoAddBox";
 

function Options(){
/*This will hold all of those color change options */
return(
<>

<div id = "optionsmenu">

<h1 id="welcometext">Welcome to the PhotoTron!</h1>

 

<PhotoAddBox/>

<Popup trigger =

{<button>Options</button>}

modal nested>
{
close => (

<div className="menusoptions">

<div className = "coloroptions">

<ChangeColor/>

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

export default Options;