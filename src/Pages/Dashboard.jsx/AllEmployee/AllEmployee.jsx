import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Button, Table } from "flowbite-react";
import Swal from "sweetalert2";
import { FaX } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllEmployee = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    console.log(users);

    const handleMakeVerified = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, varify"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/hr/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.name} is verified now!!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }

    const handlePay = user => {
        Swal.fire({
            title: "Want To Pay?",
            text: `Salary of ${user.name} is ${user.salary} Taka.`,
            input: "month",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Pay!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Payment Done!",
                    text: `Payment Successfull of ${user.name}`,
                    icon: "success"
                });
            }
        });
    }

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-4xl">All Employee</h2>
                <h2 className="text-4xl">total Employee: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Account No.</Table.HeadCell>
                        <Table.HeadCell>Salary</Table.HeadCell>
                        <Table.HeadCell>Pay & Detiles</Table.HeadCell>
                        <Table.HeadCell>
                            <span>Verified?</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            users.map(user => <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {user.name}
                                </Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.account}</Table.Cell>
                                <Table.Cell>${user.salary}</Table.Cell>
                                <Table.Cell>
                                    <div className="flex gap-1">
                                        {
                                            user.verified == true ? <Button onClick={() => handlePay(user)} size="xs">Pay</Button> : <Button size="xs" disabled>Pay</Button>
                                        }
                                        <Link to={`/detiles/${user._id}`}><Button size="xs">Detiles</Button></Link>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    {
                                        user.verified == true ? <Button size="xs">
                                            <FaCheck />
                                        </Button> : <Button onClick={() => handleMakeVerified(user)} size="xs"><FaX></FaX></Button>
                                    }
                                </Table.Cell>
                            </Table.Row>)
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default AllEmployee;