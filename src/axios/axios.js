import axios from "axios";

const instance = axios.create({
  baseURL:
    "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a2141125460b419eb95edb2eedcd474d"
});

export default instance;
