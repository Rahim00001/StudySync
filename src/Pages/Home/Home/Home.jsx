import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Reviews from "../Reviews/Reviews";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Courses></Courses>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;