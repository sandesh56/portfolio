import axios from 'axios';

export const AxiosInstance = axios.create({
    baseURL: "https://i1vevey3h9.execute-api.us-east-1.amazonaws.com/v1",
});