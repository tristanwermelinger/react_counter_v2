const Counter = (props) => {
  //console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          const newCounter = [...props.counter];
          newCounter[0] = newCounter[0] + 1;
          props.setCounter(newCounter);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          const newCounter = [...props.counter];
          newCounter[0] = newCounter[0] - 1;
          props.setCounter(newCounter);
        }}
      >
        -
      </button>

      <p>{props.counter[0]}</p>
      <button
        onClick={() => {
          const newCounter = [...props.counter];
          newCounter[0] = newCounter[0] * 0;
          props.setCounter(newCounter);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
