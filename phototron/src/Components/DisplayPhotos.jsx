import {useState, useEffect} from 'react';
import Photos from "../photos/Photos";
import AddComments from './addComments';
import DisplayComments from './displayComments'; 

function DisplayPhotos(){
/*This will let us see those lovely photos*/
 
return(

<>

<div>

{

Photos && Photos.map(photo =>{

return (
<>
<div id='photobox'>

<img src = {photo.src}/>
 
<p>{photo.Title}</p> 

<p>{photo.Caption}</p> 

<p>{photo.Date}</p>

 
<DisplayComments/>
<AddComments/>
</div>
 
</>
)
})
}
</div>
</>
)
}
export default DisplayPhotos

 