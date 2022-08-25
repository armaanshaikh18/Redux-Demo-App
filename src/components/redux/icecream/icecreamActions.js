import { BUY_ICECREAM } from "./icecreamTypes";

const buyIcecream = (number = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};

export default buyIcecream;
