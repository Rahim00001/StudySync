import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useEmployee = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isEmployee, isPending: isEmployeeLoading } = useQuery({
        queryKey: [user?.email, 'isEmployee'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/employee/${user.email}`);
            console.log(res.data);
            return res.data?.employee;
        }
    })
    return [isEmployee, isEmployeeLoading]
};

export default useEmployee;