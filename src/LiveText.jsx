import React from 'react'
import { useState } from 'react';
const LiveText = () => {
      const [text,setText]= useState('');
       
const handleChange=(e)=>{
    setText(e.target.value);
    console.log(e.target.value)
};
  return (
<>
          <span>  Input Handling </span>
<br>
</br>
<label>Write Text</label> <input placeholder="Write any Text" className="bg-blue border-4"  type='text' value={text} onChange= {handleChange}>

</input>
<br></br>
<textarea className="border-amber-950" placeholder="Text will appear" rows="5" onChange= {handleChange} value={text}></textarea>
 
<br></br>
<br></br>
</>
  )
}

export default LiveText