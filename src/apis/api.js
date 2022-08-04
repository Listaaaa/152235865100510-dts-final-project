import axios from "axios";

const baseUrl = 'https://masak-apa.tomorisakura.vercel.app';

const api = axios.create({
    baseURL: baseUrl
});

export default api;