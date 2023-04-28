const Increment = (props) => {
  return props.counter < 1000 ? (
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
