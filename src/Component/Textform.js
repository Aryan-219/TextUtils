//type rfc to get the snippet for react function based component

import { useState } from "react";
import React from "react";

export default function Textform(props) {
  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };

  const handleUpClick = () => {
    // console.log("Upper Case Button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    // console.log("Lowercase button was clicked")
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleToggle = () => {
    // console.log("ToggleCase button was clicked")
    function toggleCase(str) {
      let updated = "";
      const [upp_start, upp_end, low_start, low_end] = "AZaz"
        .split("")
        .map((x) => x.charCodeAt(0));

      for (let i = 0; i < str.length; i++) {
        const charCode = str[i].charCodeAt(0);
        let diff = 0;
        if (charCode >= upp_start && charCode <= upp_end) {
          // change uppercase to lowercase
          diff = low_end - upp_end;
        } else if (charCode >= low_start && charCode <= low_end) {
          // change lowercase to uppercase
          diff = upp_end - low_end;
        }
        updated = updated + String.fromCharCode(charCode + diff);
      }
      return updated;
    }
    let newText = toggleCase(text);
    setText(newText);
  };
  const [text, setText] = useState("Enter text");
  // text="Enter your text here" //this is the wrong way to change the state
  // setText("It is the text to be formatted") // this is the new way to change the state

  return (
    <>
    {/* Below is the main div which contains heading and textarea */}
      <div className="container" style={{color: props.mode==='dark'? 'white': 'black'}} > 
        <h1 style={{backgroundColor:"grey" ,color:"white"}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey': 'white',
          color:props.mode==='dark'? 'white': 'black'}} id="myBox" rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
        </button> 
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleToggle}>
          ToggleCase
        </button>
      </div>

      {/* Below container is for previewing text */}
      <div className="container my-3" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h1>Your text summary </h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          You will read all the text in {0.008 * text.split(" ").length} minutes{" "}
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
