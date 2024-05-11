import { useState, useEffect } from "react";


function ChangeColor()
{
/*First we set up the useState stuff*/
const [color, setColor] = useState("");
const [textcolor, setTextColor] = useState("");

 
/*Now the useEffect to update the page and all that*/
useEffect(() => {document.body.style.backgroundColor = color}, [color])

useEffect(() => {document.body.style.color = textcolor}, [textcolor])

return(
<div>

<label for = "Colorpicker">Click <b>Here</b> to Change Color</label>

<p><input type = "color" name = "Colorpicker" onChange={(e)=> setColor(e.target.value)}/></p>

<label for = "Colorpicker">Click <b>Here</b> to Change the Text Color</label>

<p><input type = "color" name = "Colorpicker" onChange={(e)=> setTextColor(e.target.value)}/></p>

</div>
)


}
export default ChangeColor;