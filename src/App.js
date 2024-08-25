import "./App.css";
import {useState} from "react";

function App() {

  const[count, setcount]=useState(0);

  const Decresehandler=()=>{
    setcount(count-1);
  }
  const Increasehandler=()=>{
    setcount(count+1);
  }
  const ResetHandler=()=>{
    setcount(0);
  }


  return (
    <div className="main">
      <div className="incdec">Increment and Decrement</div>
      <div className="btnanddiv">
        <button onClick={Decresehandler} className="minus">-</button>

        <div className="counter">{count}</div>

        <button onClick={Increasehandler} className="plus">+</button>
      </div>
      <button onClick={ResetHandler} className="reset">Reset</button>
    </div>
  );
}

export default App;
