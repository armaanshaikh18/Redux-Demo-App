import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { buyCake } from "./redux/cake/cakesAction";

const NewCake = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Numbers Of Cakes -{props.numofCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numofCakes: state.cake.numofCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCake);
