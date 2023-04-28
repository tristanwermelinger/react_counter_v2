const Reset = (props) => {
  return (
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
  );
};

export default Reset;
