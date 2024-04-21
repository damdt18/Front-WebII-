import axios from 'axios'

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_BD_URL || 'http://localhost:4000/api/v1/'
})