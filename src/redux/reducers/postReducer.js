import { FETCH_ALL } from "../constants/postConstants";

const postReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return posts;
  }
};

export default postReducer;
