import { Button, Label, TextInput } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location', location.state);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login SuccessFully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <div>
            <div>
                <Helmet>
                    <title>StudySync | Login</title>
                </Helmet>
                <div className="flex flex-col w-full items-center justify-center min-h-[500px] px-3">
                    <h2 className='mt-24 mb-8 text-4xl font-bold '>Please login</h2>
                    <form onSubmit={handleLogin} className="flex max-w-md w-full flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email2" value="Your email" />
                            </div>
                            <TextInput id="email2" type="email" name='email' placeholder="Your Email" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password2" value="Your password" />
                            </div>
                            <TextInput id="password2" type="password" name='password' placeholder='Your Password' required shadow />
                        </div>
                        <Button type="submit">Login</Button>
                    </form>
                    <p className="text-center my-4 text-gray-600">New to StayZen ? <Link to='/register' className="text-[#117cff] font-bold hover:underline">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;