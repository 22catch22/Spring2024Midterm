import { useContext, useState} from "react";
import { PhotoContext } from "../App";
import Photos from "../photos/Photos";
import Comments from "../photos/Comments";
import { CommentContext } from "../App";
function AddComments()
 //This is where we add the comments 
{
const {createComment} = useContext(CommentContext)
const handysub = (e) => {e.preventDefault();

let fData = new FormData(e.target);

let newComment = {

    UserName: fData.get("Username"),

    Text: fData.get("Text"),

};

createComment(newComment)

Comments.push(newComment);
 
e.target.reset();
 
}

return (
<>
<form onSubmit={handysub}>

<p><b>Add a Comment why don'tcha?</b></p> 


<div>
 
<input type = "text" name = "Username" placeholder="UserName"></input>
 
<input type = "text" name = "Text" placeholder="Comment"></input>


<button type = "submit" id = "userbutton">Post</button>

</div>

</form>

</>
)

}
export default AddComments;
