const Counter = (props) => {
  //console.log(props);
  return (
    <div>
      <button
        className="size"
        onClick={() => {
          props.setCounter(0);
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          const newCounter = [...counter];
          newCounter.push(+1);
          setCoutner(newCounter);
          // props.setCounter(props.counter + 1);
        }}
      >
        +
      </button>

      <p>{props.counter}</p>

      <button
        onClick={() => {
          props.setCounter(props.counter - 1);
        }}
      >
        -
      </button>

      <button
        className="size"
        onClick={() => {
          props.setAddCounter();
        }}
      >
        AddCounter
      </button>
    </div>
  );
};

export default Counter;
