import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'https://my-json-server.typicode.com/rodrigsmor/e-commerce/produtos'
    }
);

export default api;