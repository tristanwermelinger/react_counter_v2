const Increment = (props) => {
  return props.counter < 10 ? (
    <button
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      +
    </button>
  ) : null;
};

export default Increment;
