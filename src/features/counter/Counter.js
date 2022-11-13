import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  const inputHandler = (e) => {
    setIncrementAmount(e.target.value);
  };

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const incrementByAmountHandler = () => {
    dispatch(incrementByAmount(addValue));
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <input type="text" value={incrementAmount} onChange={inputHandler} />
      <div>
        <button onClick={incrementByAmountHandler}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
