import * as api from "../../api/userApi";
import { FETCH_ALL_USERS } from "../constants/userConstants";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: FETCH_ALL_USERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
