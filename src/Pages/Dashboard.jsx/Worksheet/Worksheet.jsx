import { Button, Label, Select, TextInput } from "flowbite-react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Worksheet = () => {
    const { user } = useContext(AuthContext);
    const name = user.displayName;
    const email = user.email;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const workInfo = {
            name: data.name,
            email: data.email,
            task: data.task,
            hour: data.hour,
            date: data.date
        }
        console.log(workInfo);
        fetch('http://localhost:5000/worksheet', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(workInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    console.log('work added to database');
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "SuccessFully added to wotksheet",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    console.log(user);
    return (
        <div className="flex flex-col w-full items-center justify-center min-h-[500px] px-3">
            <h2 className='mt-5 mb-8 text-4xl font-bold '>Submit Work</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md w-full flex-col gap-4 mb-8">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your Name" />
                    </div>
                    <TextInput id="name" type="text" {...register("name", { required: true })} placeholder="your name" value={name} />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" {...register("email", { required: true })} defaultValue={email} />
                    {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="task" value="Select Task" />
                    </div>
                    <Select id="task" {...register("task", { required: true })}>
                        <option>Online Class</option>
                        <option>Sales</option>
                        <option>Support</option>
                        <option>Content</option>
                        <option>Paper Work</option>
                    </Select>
                    {errors.task && <span className="text-red-600">Task is required</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="hour" value="Workhour" />
                    </div>
                    <TextInput id="hour" type="number" {...register("hour", { required: true })} placeholder="Workhour" />
                    {errors.hour && <span className="text-red-600">Workhour is required</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="date" value="Workdate" />
                    </div>
                    <TextInput id="date" type="date" {...register("date", { required: true })} placeholder="Workdate" />
                    {errors.date && <span className="text-red-600">Workdate is required</span>}
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default Worksheet;