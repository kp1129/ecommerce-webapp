import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:5001/ecommerce-webapp-4ef53/us-central1/api"
})

export default instance;