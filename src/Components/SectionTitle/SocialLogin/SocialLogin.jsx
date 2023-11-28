import { Button } from 'flowbite-react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    // const axiosPublic = useAxiosPublic();
    // const navigate = useNavigate();

    const handleGooglelogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                // const userInfo = {
                //     email: result.user?.email,
                //     name: result.user?.displayName
                // }
                // axiosPublic.post('/users', userInfo)
                //     .then(res => {
                //         console.log(res.data);
                //         navigate('/')
                //     })
            })
    }
    return (
        <div>
            <div className="px-8 mb-2 -mt-4">
                <Button outline gradientDuoTone="purpleToBlue" onClick={handleGooglelogin}>
                    <FaGoogle className="text-xl text-yellow-300 mr-2"></FaGoogle>
                    Google Login
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;