import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick = () =>{
    /*console.log("Uppercase was clicked" +text);*/
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () =>{
    /*console.log("Uppercase was clicked" +text);*/
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () =>{
    /*console.log("Uppercase was clicked" +text);*/
    let newText = "";
    setText(newText)
  }

  const handleCapitalize = () =>{
    /*console.log("Uppercase was clicked" +text);*/
    let newText = text.replace(/\b\w/g, function(l){ return l.toUpperCase() });
    setText(newText)
  }

  const handleCopy = () =>{
    /*console.log("Uppercase was clicked" +text);*/
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }

  const handleReverse = () =>{
    /*console.log("Uppercase was clicked" +text);*/
    let newText =  text.split('').reverse().join('');
    setText(newText)
  }
 

  const handleOnChange = (event) =>{
   /*console.log("On change");*/
   setText(event.target.value)
  }
  const[text, setText]=useState("");
  return (
    <div>
      <h1>{props.heading}</h1>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"><h2>Enter Your Text Below</h2></label>
  <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn me-2 my1" style={{backgroundColor: "#e3f2fd"}} onClick={handleUpClick}>Convert to upper case</button>
<button className="btn me-2 my1" style={{backgroundColor: "#e3f2fd"}} onClick={handleLoClick}>Convert to lower case</button>
<button className="btn me-2 my1" style={{backgroundColor: "#e3f2fd"}} onClick={handleCapitalize}>Capitalize</button>
<button className="btn me-2 my1" style={{backgroundColor: "#e3f2fd"}} onClick={handleClearClick}>Clear</button>
<button className="btn me-2 my1" style={{backgroundColor: "#e3f2fd"}} onClick={handleCopy}>Copy Text</button>
<button className="btn me-2 my1" style={{backgroundColor: "#e3f2fd"}} onClick={handleReverse}>Reverse Text</button>
<h2>Your Text Summary</h2>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words {text.length} characters</p>
<p>{0.008 *text.split(" ").length} minutes read </p>
<h2>Your Text Preview</h2>
<p>{text}</p>
    </div>
  )
}
