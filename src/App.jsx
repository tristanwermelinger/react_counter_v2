import "./App.css";
import { useState } from "react";
// import Increment from "./assets/components/Increment";
// import Decrement from "./assets/components/Decrement";
// import Reset from "./assets/components/Reset";
// import AddCounter from "./assets/components/AddCounter";
import Counter from "./assets/components/Counter";

function App() {
  //console.log(App);
  const [counter, setCounter] = useState([0]);
  console.log(counter);
  return (
    <>
      {counter.map((elem) => {
        return <Counter counter={counter} setCounter={setCounter} />;
      })}
    </>
  );
}

export default App;
