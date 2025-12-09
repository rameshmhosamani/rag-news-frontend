import axios from "axios";

const API = "http://localhost:5000/api";

export const createSession = () => axios.get(`${API}/session`);
export const sendMessage = (data) => axios.post(`${API}/chat`, data);
export const history = (id) => axios.get(`${API}/history/${id}`);
export const reset = (id) => axios.delete(`${API}/history/${id}`);
