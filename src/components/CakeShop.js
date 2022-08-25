import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/cake/cakesAction";

const CakeShop = (props) => {
  return (
    <div>
      <h2>Numbers Of Cakes -{props.numofCakes}</h2>
      <button onClick={props.buyCake}>Add Cakes</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeShop);
