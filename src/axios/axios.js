import axios from "axios";

const instance = axios.create({
  baseURL:
    "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-14&sortBy=publishedAt&apiKey=a2141125460b419eb95edb2eedcd474d"
});

export default instance;
