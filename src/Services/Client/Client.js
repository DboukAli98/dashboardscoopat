import axios from "axios";
import base_url from "../../Utils/Constants/Constants";

const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default apiClient;