import axios from 'axios';

const API_URL = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const GITHUB_URL = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_URL,
});

export default { API_URL, GITHUB_URL };
