import  axios   from 'axios';

const baseUrl = "http://localhost:8080";

export const axiosClient = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
    }
})
