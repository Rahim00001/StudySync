import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import PreAbout from "../PreAbout/PreAbout";
import Reviews from "../Reviews/Reviews";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Courses></Courses>
            <PreAbout></PreAbout>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;