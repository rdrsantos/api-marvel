import axios from "axios";

const axiosApi = new axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
})

export const api = {
  get(endpoint) {
    return axiosApi(endpoint)
  }
}