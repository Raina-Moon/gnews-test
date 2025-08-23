import axios from 'axios'

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Authorization: `Bearer ${import.meta.env.GNEWS_API_KEY}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    timeout: 10000
})