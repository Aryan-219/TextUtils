// import logo from "./logo.svg";
// import "./App.css";
// let name ="Aryan Agrawal";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
function App() {
  return (
    <>
      <Navbar title="Text Utils" />
      <div className="container">
        <Textform heading='Enter the text to analyze' />
      </div>
    </>
  );
}

export default App;
