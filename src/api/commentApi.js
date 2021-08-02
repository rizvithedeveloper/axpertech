import axios from "axios";

const url = "https://axpertech.herokuapp.com/api/comments";
export const fetchComments = () => axios.get(url);
