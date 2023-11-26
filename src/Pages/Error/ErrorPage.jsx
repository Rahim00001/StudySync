import { Link } from "react-router-dom";
import error from '../../assets/images/errorPAge.jpg'
import { Button } from "flowbite-react";

const ErrorPage = () => {
    return (
        <div className="relative">
            <img src={error} alt="Erro Img" className="w-[80] mx-auto h-screen relative" />
            <div className="w-full flex justify-center bottom-20 right-12 absolute">
                <Link to='/'><Button gradientDuoTone="redToYellow" className="btn btn-neutral absolute ">Go Home</Button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;