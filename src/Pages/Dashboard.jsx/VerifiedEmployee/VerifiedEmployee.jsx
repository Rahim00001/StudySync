import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Button, Table } from "flowbite-react";
import Swal from "sweetalert2";

const VerifiedEmployee = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    console.log(users);

    const handleMakeHR = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Make Hr"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/newhr/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.name} is HR now!!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });
    }

    const handleFire = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Fire!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Fired!",
                                text: `${user.name} has been fired.`,
                                icon: "success"
                            });
                        }
                    })

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
                        <Table.HeadCell>Designation</Table.HeadCell>
                        <Table.HeadCell>Make HR</Table.HeadCell>
                        <Table.HeadCell>
                            <span>Fire</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            users.map(user => <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {user.name}
                                </Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.designation}</Table.Cell>
                                <Table.Cell>
                                    <div className="flex gap-1">
                                        {
                                            user.role == 'Employee' ? <Button onClick={() => handleMakeHR(user)} size="sm" >Make Hr</Button> : <Button size="sm" disabled>Make Hr</Button>
                                        }
                                        {/* <Link to={`/detiles/${user._id}`}><Button size="xs">Detiles</Button></Link> */}
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button size="sm" onClick={() => handleFire(user)} gradientMonochrome="failure">Fire</Button>
                                </Table.Cell>
                            </Table.Row>)
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default VerifiedEmployee;