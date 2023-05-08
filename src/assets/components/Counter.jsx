const Counter = (props) => {
  //console.log(props);
  return (
    <div>
      <button className="size" onClick={() => {}}>
        Reset
      </button>

      <button
        onClick={() => {
          // props.setCounter(props.counter + 1);
        }}
      >
        +
      </button>

      <p>{props.counter}</p>

      <button>-</button>

      {/* <button
        className="size"
        onClick={() => {
          props.setAddCounter();
        }}
      >
        AddCounter
      </button> */}
    </div>
  );
};

export default Counter;
