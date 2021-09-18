import axios from "axios";

axios.interceptors.request.use(null, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // console.log("Responsive is ", response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const http = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;
