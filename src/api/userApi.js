import axios from "axios";

const url = "https://axpertech.herokuapp.com/api/users";
export const fetchUsers = () => axios.get(url);
