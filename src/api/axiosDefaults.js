import axios from "axios";

axios.defaults.baseURL = 'https://drf-tasked-ec51bc3bfc2d.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true