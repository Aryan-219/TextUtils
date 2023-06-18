// import logo from "./logo.svg";
// import "./App.css";
// let name ="Aryan Agrawal";

import Textform from "./Component/Textform";
import Navbar from "./Component/Navbar";
// import About from "./Component/About";
import { useState } from "react";

function App() {
  const toggleMode =()=>{
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#343a40'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }

  const [mode, setMode] = useState("light");
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      {/* <About /> */}
      <div className="container"><Textform heading='Enter the text to analyze' mode={mode}/></div>
    </>
  );
}

export default App;
