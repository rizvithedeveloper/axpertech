import axios from "axios";

const url = "https://axpertech.herokuapp.com/api/categories";
export const fetchCategories = () => axios.get(url);
