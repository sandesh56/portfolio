import axios from 'axios';

export const AxiosInstance = axios.create({
    baseURL: "https://i1vevey3h9.execute-api.us-east-1.amazonaws.com/v1",
});


export const AxiosBlogInstance = axios.create({
    baseURL: "https://dev.to/api/articles?username=sandesh56",
    headers: {
        'Content-Type': 'application/json',
    }
})