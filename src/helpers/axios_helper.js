import axios from 'axios';


export const getAuthToken = () => {
    return window.localStorage.getItem('authToken');
};

export const setAuthHeader = (token) => {
    window.localStorage.setItem('authToken', token);
};

axios.defaults.baseURL = 'http://localhost:8083';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = (method, url, data) => {

    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {
        headers = {'Authorization': `Bearer ${getAuthToken()}`};
    }

    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data});
};