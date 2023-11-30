import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Table } from 'flowbite-react';
const WorkTable = () => {
    const { user } = useContext(AuthContext);
    const [worksheet, setWorsheet] = useState([]);
    console.log(worksheet);
    const url = `http://localhost:5000/worksheet?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setWorsheet(data))
    })
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mb-4'>Your Work: {worksheet.length}</h1>
            <div className="overflow-x-auto">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>Task</Table.HeadCell>
                        <Table.HeadCell>Workhour</Table.HeadCell>
                        <Table.HeadCell>Workdate</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            worksheet.map(work => <Table.Row key={work._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {work.task}
                                </Table.Cell>
                                <Table.Cell>{work.hour}</Table.Cell>
                                <Table.Cell>{work.date}</Table.Cell>
                            </Table.Row>)
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default WorkTable;