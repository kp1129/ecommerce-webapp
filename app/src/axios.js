import axios from 'axios';

const instance = axios.create({
    baseURL: "api_will_go_here" //change this line later
})

export default instance;