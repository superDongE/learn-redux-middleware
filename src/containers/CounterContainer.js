import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  increaseAsync,
  decreaseAsync,
} from "../modules/counter";

function CounterContainer() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    //액션만들고 디스패치
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    //액션만들고 디스패치
    dispatch(decreaseAsync());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
