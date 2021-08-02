import axios from "axios";

const url = "https://axpertech.herokuapp.com/api/posts";
export const fetchPosts = () => axios.get(url);
