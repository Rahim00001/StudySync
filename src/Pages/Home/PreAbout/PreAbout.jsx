import person from "../../../assets/images/aboutWomen.jpg"
import background from "../../../assets/images/aboutCr.jpg"
import { Button } from "flowbite-react";
import { FaCheck } from "react-icons/fa";
const PreAbout = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-20 flex flex-col lg:flex-row gap-60 lg:gap-10 lg:mb-40">
            <div className="lg:w-1/2 relative px-5">
                <img src={background} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={person} className="w-3/4 absolute top-1/3 right-5 rounded-lg shadow-2xl" />
            </div>
            <div className="lg:w-1/2 px-5">
                <p className="text-xl mb-3 font-bold text-[#d90424]">CREATIVE APPROCH</p>
                <h1 className="text-5xl font-bold mb-3">We develope the <br /> best programs</h1>
                <p className="text-[#737373] py-8">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <div className="flex gap-3 items-center mb-1">
                    <FaCheck className="text-blue-600 text-lg"></FaCheck>
                    <p className="text-lg">Lifetime Access</p>
                </div>
                <div className="flex gap-3 items-center mb-1">
                    <FaCheck className="text-blue-600 text-lg"></FaCheck>
                    <p className="text-lg">Lattest Tecnalogy</p>
                </div>
                <div className="flex gap-3 items-center mb-5">
                    <FaCheck className="text-blue-600 text-lg"></FaCheck>
                    <p className="text-lg">Best price for all course</p>
                </div>
                <Button gradientDuoTone="pinkToOrange">About Us</Button>
            </div>
        </div>
    );
};

export default PreAbout;