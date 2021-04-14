import axios from "axios";


const baseURL = "127.0.0.1:8000/empleados/login/"


export default axios.create({
    baseURL,
});