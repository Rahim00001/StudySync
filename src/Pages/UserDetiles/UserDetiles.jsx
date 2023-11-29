import { Card } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const UserDetiles = () => {
    const userDetiles = useLoaderData();
    console.log(userDetiles);
    const { account, email, name, photo, designation } = userDetiles;
    return (
        <div>
            <div>
                <h2 className="text-center text-4xl md:text-6xl font-medium pt-20">Employee Detiles</h2>
            </div>
            <div className="flex justify-center">
                <Card className="max-w-sm md:w-[500px] md:h-72 my-12" imgSrc={photo} horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-medium text-lg text-gray-700 dark:text-gray-400">
                        Designarion: {designation}
                    </p>
                    <p className="font-medium text-lg text-gray-700 dark:text-gray-400">
                        Email: {email}
                    </p>
                    <p className="font-medium text-lg text-gray-700 dark:text-gray-400">
                        Account No: {account}
                    </p>
                </Card>
            </div>

        </div>
    );
};

export default UserDetiles;