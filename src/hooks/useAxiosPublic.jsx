import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://study-sync-server-ten.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;