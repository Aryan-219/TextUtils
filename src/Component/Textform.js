//type rfc to get the snippet for react function based component

import { useState } from "react";
import React from "react";

export default function Textform(props) {
const handleUpClick = () => { 
    // console.log("Upper Case Button was clicked");
    let newText= text.toUpperCase();
    setText(newText)
  };
  const handleOnChange = (event)=>{ 
    // console.log("On Change")
    setText(event.target.value)
  }
  const [text, setText] = useState("Enter text here");
  // text="Enter your text here" //this is the wrong way to change the state
  // setText("It is the text to be formatted") // this is the new way to change the state
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to uppercase
      </button>
    </div>
  );
}
