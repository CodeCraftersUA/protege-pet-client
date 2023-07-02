import axios from "axios";

const ApiManager = axios.create({
    baseURL: 'http://localhost:3000'
});

export default ApiManager;