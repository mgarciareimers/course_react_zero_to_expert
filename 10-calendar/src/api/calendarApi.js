import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_CALENDAR_URL } = getEnvVariables();

const calendarApi = axios.create({
    baseURL: VITE_API_CALENDAR_URL
});

// Configurate interceptors.
calendarApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        token: localStorage.getItem('token')
    };

    return config;
});

export default calendarApi;