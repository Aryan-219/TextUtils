// import logo from "./logo.svg";
// import "./App.css";
// let name ="Aryan Agrawal";

import Textform from "./Component/Textform";
import Navbar from "./Component/Navbar";
import Alert from "./Component/Alert";
// import About from "./Component/About";
import { useState } from "react";

function App() {
  const toggleMode =()=>{
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#343a40'
      showAlert(" Dark Mode Has Been Enabled","success")
      document.title="TextUtils-Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert(" Light Mode Has Been Enabled", "success")
      document.title="TextUtils-Light Mode"
    }
  }

  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null)

  const showAlert= (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <About /> */}
      <div className="container"><Textform  heading='Enter the text to analyze' showAlert={showAlert} mode={mode}/></div>
    </>
  );
}

export default App;
