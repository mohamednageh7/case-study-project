import axios from 'axios';

export const controller = new AbortController();
export const signal = { signal: controller.signal };
const http = (baseUrl: string) =>
  axios.create({
    baseURL: baseUrl,
    // withCredentials:true,
    headers: {
      'Content-type': 'application/json',
    },
  });

export default http;
