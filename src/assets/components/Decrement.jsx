const AddCounter = (props) => {
  return (
    <button
      className="size"
      onClick={() => {
        {
          props.setAddCounter();
        }
      }}
    >
      Add Counter
    </button>
  );
};

export default AddCounter;
