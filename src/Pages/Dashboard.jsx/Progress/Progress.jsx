import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Table } from "flowbite-react";

const Progress = () => {
    const axiosSecure = useAxiosSecure();
    const { data: progress = [] } = useQuery({
        queryKey: ['progress'],
        queryFn: async () => {
            const res = await axiosSecure.get('/progress');
            return res.data;
        }
    })
    console.log(progress);
    return (
        <div>
            <h2 className="text-center text-4xl font-bold mb-5">Work Progress:{progress.length}</h2>
            <div className="overflow-x-auto">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Task</Table.HeadCell>
                        <Table.HeadCell>Workhour</Table.HeadCell>
                        <Table.HeadCell>Workdate</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            progress.map(progress => <Table.Row key={progress._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {progress.name}
                                </Table.Cell>
                                <Table.Cell>{progress.email}</Table.Cell>
                                <Table.Cell>{progress.task}</Table.Cell>
                                <Table.Cell>{progress.hour}</Table.Cell>
                                <Table.Cell>{progress.date}</Table.Cell>
                            </Table.Row>)
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default Progress;