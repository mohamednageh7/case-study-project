
import axios from "axios";

export const controller = new AbortController();
export const signal = {signal: controller.signal}
const http = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  // withCredentials:true,
  headers: {
    "Content-type": "application/json",
  }
}); 

http.interceptors.request.use((req: any) => {
  if (localStorage.getItem("token")) {
    req.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export default http