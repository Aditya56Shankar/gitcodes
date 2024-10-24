import axios from "axios"
export const baseurl='http://localhost:8080/abc';
export const api=axios.create({
    base_url:baseurl
})