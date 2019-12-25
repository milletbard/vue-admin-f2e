import axios from "axios";

export const getPosts = () => axios.get("posts");

export const deletePosts = id => axios.delete(`posts/${id}`);
