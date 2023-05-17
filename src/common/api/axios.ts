import axios from "axios";

const BASE_URL = "https://itunes.apple.com";

const AxiosClient = axios.create({
  baseURL: BASE_URL,
});


export default AxiosClient