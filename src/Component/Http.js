import axios from "axios";

export const  Http = axios.create({
    baseURL:"https://kv-varlu.vercel.app"
})