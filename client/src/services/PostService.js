// client/src/services/postService.js
import axios from "axios";

const API_URL = "http://localhost:5000/posts"; // Adjust if using a different port

export const fetchPosts = () => axios.get(API_URL);
export const createPost = (postData) => axios.post(API_URL, postData);
export const updatePost = (id, postData) =>
  axios.put(`${API_URL}/${id}`, postData);
export const deletePost = (id) => axios.delete(`${API_URL}/${id}`);
