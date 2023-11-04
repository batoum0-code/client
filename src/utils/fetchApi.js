import axios from 'axios'


export const fetchApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
    },
})
