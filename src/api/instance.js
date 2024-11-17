import axios from "axios";

// Base URL 및 인스턴스 생성
const baseURL =
  "http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080";
const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
