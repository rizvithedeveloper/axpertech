import { FETCH_ALL_COMMENTS } from "../constants/commentConstants";
const commentReducer = (comments = [], action) => {
  switch (action.type) {
    case FETCH_ALL_COMMENTS:
      return action.payload;
    default:
      return comments;
  }
};

export default commentReducer;
