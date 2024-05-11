import {useContext} from "react";
import Photos from "../photos/Photos";
import {PhotoContext} from "../App";
import { CommentContext } from "../App";
 
function AddPhoto(){
/*Lets set up the useContext stuff*/

const {createPhoto} = useContext(PhotoContext)


const handysub = (e) => {e.preventDefault();

   let fData = new FormData(e.target)
/*This will create a new photo */
 

let newPhoto = 

{

   src: fData.get ("picsrc"),

   Title: fData.get("Title"),

   Caption: fData.get("Caption"),

   Date: fData.get("Date"),
 
  
};

createPhoto(newPhoto);
 
/*push it to the Photos Array */

Photos.push(newPhoto);

e.target.reset();

console.log({newPhoto});

console.log({Photos})

};
 
return(
<>

<div id="photoform">

<h2>Add Photo</h2>

<form onSubmit={handysub}>

<label htmlFor = "picsrc">Source: </label>

<input type = "url" name = "picsrc"/>

<label htmlFor = "Title">Title</label>

<input type = "text" name = "Title"/>

<label htmlFor = "Caption">Caption: </label>

<input type = "text" name = "Caption"/>

<label htmlFor= "Date">Date Added: </label>

<input type="date" name = "Date"/>

<button type = "submit">Submit</button>

</form>

</div>
</>

);

}

export default AddPhoto;