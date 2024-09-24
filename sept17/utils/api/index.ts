import axios from 'axios';

export const axiosAuthCheck =  async({temp}: {temp: unknown}) => {
    const axiosInstance = axios.create({
        baseURL: 'https://dummyjson.com/',
    });
    axiosInstance.interceptors.request.use(
        (config) => {
            config.headers['X-Content-Type-Options'] = 'nosniff';
            config.headers['X-Frame-Options'] = 'DENY';
            config.headers['Content-Type'] = 'application/json'
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    const axiosResp = await axiosInstance.post('/auth/login', temp)
    return axiosResp.data
}