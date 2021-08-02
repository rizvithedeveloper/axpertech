import * as api from "../../api/commentApi";
import { FETCH_ALL_COMMENTS } from "../constants/commentConstants";

export const getComments = () => async (dispatch) => {
  try {
    const { data } = await api.fetchComments();

    dispatch({ type: FETCH_ALL_COMMENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
