import axios from "axios"

export const api = axios.create({
    headers: {
        'Content-type': 'application/json'
    },
    baseURL: 'https://jsonplaceholder.typicode.com/',
    responseType: 'json'
})
