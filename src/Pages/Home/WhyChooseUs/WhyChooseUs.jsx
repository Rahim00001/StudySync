import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaHeadset, FaLaptopCode, FaUserGraduate, } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const WhyChooseUs = () => {
    return (
        <div>
            <SectionTitle
                heading={"Why Choose US"}
                subHeading={"------Best Features About Us------"}>
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 max-w-screen-xl mx-auto border">
                <div className="flex flex-col justify-center items-center border">
                    <MdOutlineVideoLibrary className="text-9xl text-red-500 mb-3" />
                    <h2 className="text-2xl font-medium">Online Courses</h2>
                    <p className="text-center text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, sint?</p>
                </div>
                <div className="flex flex-col justify-center items-center border">
                    <FaHeadset className="text-9xl text-red-500 mb-3"></FaHeadset>
                    <h2 className="text-2xl font-medium">24/7 Support</h2>
                    <p className="text-center text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, sint?</p>
                </div>
                <div className="flex flex-col justify-center items-center border">
                    <FaUserGraduate className="text-9xl text-red-500 mb-3"></FaUserGraduate>
                    <h2 className="text-2xl font-medium">Personal Teacher</h2>
                    <p className="text-center text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, sint?</p>
                </div>
                <div className="flex flex-col justify-center items-center border">
                    <FaLaptopCode className="text-9xl text-red-500 mb-3"></FaLaptopCode>
                    <h2 className="text-2xl font-medium">Powerful Program</h2>
                    <p className="text-center text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, sint?</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;