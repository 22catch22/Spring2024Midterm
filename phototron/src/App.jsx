import { createContext, useState, useContext } from 'react'
 import Gallery from './pages/gallery'
import './App.css'
import Photos from './photos/Photos'
import Comments from './photos/Comments';
 
const PhotoContext = createContext();
  const CommentContext = createContext()

function App() {


const [pto, setPto] = useState(Photos);

function createPhoto(pic)
{pic.id = pto.length +1;
setPto([Photos])}

const [comment, setComment] = useState(Comments);

function createComment(com)
{com.id = comment.length +1;
setComment([Comments])
}



return (
<>
<PhotoContext.Provider value = {{pto,createPhoto}}> 
 <CommentContext.Provider value = {{comment,createComment}}>
<Gallery/>
 </CommentContext.Provider>
</PhotoContext.Provider>

</>
  )
}

export default App
export {PhotoContext};
export {CommentContext};