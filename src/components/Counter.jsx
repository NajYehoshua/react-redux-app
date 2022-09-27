import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented } from "../../slice/createSlice";

const Counter = () => {
  //! useSelector hooks for accessing the redux store
  const counter = useSelector((state) => state.value);
  //! useDispatch to dispatch action
  const dispatch = useDispatch();

  //! event handler fn for increment action
  const onClickIncremented = (e) => {
    e.preventDefault();

    dispatch(incremented());
  };

  //! event handler fn for decrement action
  const onClickDecremented = (e) => {
    e.preventDefault();

    dispatch(decremented());
  };

  return (
    <>
      <h2>
        Counter: {counter === 0 ? "Please push in increment button" : counter}
      </h2>
      <button onClick={onClickIncremented}>Increment</button>
      <button onClick={onClickDecremented}>Decrement</button>
    </>
  );
};

export default Counter;
