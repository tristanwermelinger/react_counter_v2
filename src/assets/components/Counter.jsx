const Counter = (props) => {
  return (
    <div>
      <button
        className="size"
        onClick={() => {
          {
            props.setCounter(0);
          }
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          props.setAddCounter(props.Counter + 1);
        }}
      >
        +
      </button>

      <button
        className="size"
        onClick={() => {
          props.setAddCounter();
        }}
        Add
        Counter
      ></button>
      <button
        onClick={() => {
          props.setCounter(props.counter - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
