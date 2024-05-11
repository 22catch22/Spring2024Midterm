 
 
import { useEffect } from 'react';
import Comments from '../photos/Comments';
import Photos from '../photos/Photos';
function DisplayComments(){
/*This will let us see those lovely Comments*/
 

return(

<>

{Comments && Comments.map(comment=>{

return(
 
<div id='commentbox'>



<p id='commentmessage'>{comment.UserName}{comment.Text}</p> 
<div>
</div>
</div>
)
})
}

</>
)
}

export default DisplayComments

