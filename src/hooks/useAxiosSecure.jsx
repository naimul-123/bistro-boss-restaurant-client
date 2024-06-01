import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-rho.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`;
        return config;

    }, function (err) {
        return Promise.reject(err)
    });
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    },
        async (err) => {
            const status = err.response.status;
            if (status === 401 || status === 403) {
                await logOut();
                navigate('/login');


            }

            return Promise.reject(err)
        }
    )
    return axiosSecure
};

export default useAxiosSecure;