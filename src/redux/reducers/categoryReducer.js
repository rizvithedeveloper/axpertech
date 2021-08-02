import { FETCH_ALL } from "../constants/categoryConstants";
const categoryReducer = (categories = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return categories;
  }
};

export default categoryReducer;
