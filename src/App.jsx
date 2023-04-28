import "./App.css";
import { useState } from "react";
import Increment from "./assets/components/Increment";
import Decrement from "./assets/components/Decrement";
import Reset from "./assets/components/Reset";
import AddCounter from "./assets/components/AddCounter";

function App() {
  //console.log(App);
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <>
      <div>
        <div>
          <AddCounter counter={counter} setCounter={setCounter} />
        </div>
      </div>
      <div>
        <Increment counter={counter} setCounter={setCounter} />
      </div>
      <p>{counter}</p>
      <div>
        <Decrement counter={counter} setCounter={setCounter} />
      </div>
      <div>
        <Reset counter={counter} setCounter={setCounter} />
      </div>
    </>
  );
}

export default App;
