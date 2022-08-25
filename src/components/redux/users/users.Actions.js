import axios from "axios";
import {
  FETCH_USERS_FAILED,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./users.Types";

export const fetchUSersrequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUSerssuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUSersfailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const fetchUser = () => {
  return (dispatch) => {
    dispatch = { fetchUSersrequest };
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUSerssuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUSersfailed(errorMsg));
      });
  };
};
export default fetchUser;
