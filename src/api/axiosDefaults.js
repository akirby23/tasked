import axios from "axios";

// Base defaults
axios.defaults.baseURL = 'https://drf-tasked-ec51bc3bfc2d.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

// Intercepts the request
export const axiosReq = axios.create();
// Intercepts the response
export const axiosRes = axios.create();