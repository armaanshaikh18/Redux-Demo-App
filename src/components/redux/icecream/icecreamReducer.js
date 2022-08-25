import { BUY_ICECREAM } from "./icecreamTypes";
const initialState = {
  numofIcecream: 20,
};
const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numofIcecream: state.numofIcecream - action.payload,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
