import "./App.css";
import { useState } from "react";
// import Increment from "./assets/components/Increment";
// import Decrement from "./assets/components/Decrement";
// import Reset from "./assets/components/Reset";
// import AddCounter from "./assets/components/AddCounter";
import Counter from "./assets/components/Counter";

const App = () => {
  //console.log(app);
  const [counter, setCounter] = useState([0]);
  console.log(counter);
  return (
    <>
      {counter.map((elem) => {
        return (
          <span key={elem}>
            <Counter counter={counter} setCounter={setCounter} />
          </span>
        );
      })}
    </>
  );
};

export default App;
