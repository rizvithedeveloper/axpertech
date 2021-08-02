import { FETCH_ALL_USERS } from "../constants/userConstants";
const userReducer = (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.payload;
    default:
      return users;
  }
};

export default userReducer;
