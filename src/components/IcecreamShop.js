import React from "react";
import { connect } from "react-redux";
import buyIcecream from "./redux/icecream/icecreamActions";

const IcecreamShop = (props) => {
  return (
    <div>
      <h2>num of Icecream - {props.numofIcecream}</h2>
      <button onClick={props.buyIcecream}>Click Me</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numofIcecream: state.icecream.numofIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamShop);
