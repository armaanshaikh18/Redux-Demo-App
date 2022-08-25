import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "./redux/cake/cakesAction";

const Hookcakeshop = () => {
  const numofCakes = useSelector((state) => state.cake.numofCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes -{numofCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Decrement</button>
    </div>
  );
};

export default Hookcakeshop;
