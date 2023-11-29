import { Button, FileInput, Label, Select, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SectionTitle/SocialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data)
        // upload image
        const formData = new FormData();
        formData.append('image', data.photo[0])
        fetch(image_hosting_api, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((res) => {
                if (res.success) {
                    createUser(data.email, data.password)
                        .then(result => {
                            const loggedUser = result.user;
                            console.log(loggedUser);
                            updateUserProfile(data.name, data.photoURL)
                                .then(() => {
                                    const userInfo = {
                                        name: data.name,
                                        email: data.email,
                                        role: data.role,
                                        salary: data.salary,
                                        account: data.account,
                                        verified: false,
                                        photo: res.data.display_url,
                                        designation: data.designation
                                    }
                                    axiosPublic.post('/users', userInfo)
                                        .then(res => {
                                            if (res.data.insertedId) {
                                                console.log('user added to database');
                                                reset();
                                                Swal.fire({
                                                    position: "top-end",
                                                    icon: "success",
                                                    title: "Registration SuccessFully",
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                });
                                                navigate('/')
                                            }
                                        })
                                })
                                .catch(error => console.log(error))
                        })
                }
                console.log(res)
            })


        // createUser(data.email, data.password)
        //     .then(result => {
        //         const loggedUser = result.user;
        //         console.log(loggedUser);
        //         updateUserProfile(data.name, data.photoURL)
        //             .then(() => {
        //                 const userInfo = {
        //                     name: data.name,
        //                     email: data.email,
        //                     role: data.role,
        //                     salary: data.salary,
        //                     account: data.account,
        //                     verified: false,
        //                     photo: data.photo,
        //                     designation: data.designation
        //                 }
        //                 axiosPublic.post('/users', userInfo)
        //                     .then(res => {
        //                         if (res.data.insertedId) {
        //                             console.log('user added to database');
        //                             reset();
        //                             Swal.fire({
        //                                 position: "top-end",
        //                                 icon: "success",
        //                                 title: "Registration SuccessFully",
        //                                 showConfirmButton: false,
        //                                 timer: 1500
        //                             });
        //                             navigate('/')
        //                         }
        //                     })
        //             })
        //             .catch(error => console.log(error))
        //     })
    }

    return (
        <div>
            <Helmet>
                <title>StudySync | Register</title>
            </Helmet>
            <div className="flex flex-col w-full items-center justify-center min-h-[500px] px-3">
                <h2 className='mt-24 mb-8 text-4xl font-bold '>Please Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md w-full flex-col gap-4 mb-8">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your Name" />
                        </div>
                        <TextInput id="name" type="text" {...register("name", { required: true })} name='name' placeholder="Your Name" shadow />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput id="email" type="email" {...register("email", { required: true })} name='email' placeholder="Your Email" shadow />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="role" value="Select your Role" />
                        </div>
                        <Select id="role" name="role" {...register("role", { required: true })} >
                            <option>Employee</option>
                            <option>HR</option>
                            <option>Admin</option>
                        </Select>
                        {errors.role && <span className="text-red-600">Role is required</span>}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="account" value="Your bank account number" />
                        </div>
                        <TextInput id="account" type="number" {...register("account", { required: true })} name='account' placeholder="bank account number" shadow />
                        {errors.account && <span className="text-red-600">Account number is required</span>}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="salary" value="Your salary" />
                        </div>
                        <TextInput id="salary" type="number" {...register("salary", { required: true })} name='salary' placeholder="Your salary" shadow />
                        {errors.salary && <span className="text-red-600">Your Salary Amount is required</span>}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="designation" value="Your designation" />
                        </div>
                        <TextInput id="designation" type="text" {...register("designation", { required: true })} name='designation' placeholder="designation" shadow />
                        {errors.designation && <span className="text-red-600">designation is required</span>}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="photo" value="Your Photo" />
                        </div>
                        <FileInput id="photo" {...register("photo", { required: true })} name='photo' />
                        {/* <TextInput id="photo" type="file" {...register("photo", { required: true })} name='photo' placeholder="Photo URL" shadow /> */}
                        {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput id="password" type="password" {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                        })} name='password' placeholder='Your Password' shadow />
                        {errors.password?.type === "required" && (
                            <p className="text-red-600">Password is required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-600">Password must be atleast 6 characters</p>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <p className="text-red-600">Password must be below 21 characters</p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red-600">Password must have one upperCase, one LowerCase, one Number and one Special characters</p>
                        )}
                    </div>
                    <Button type="submit" >Register</Button>
                </form>
                <SocialLogin></SocialLogin>
                <p className="text-center my-4 text-gray-600">Already have an account ? <Link to='/login' className="text-[#117cff] font-bold hover:underline">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;