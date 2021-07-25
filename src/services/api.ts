import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'https://my-json-server.typicode.com/rodrigsmor/Fake-server/produtos'
    }
);

export default api;