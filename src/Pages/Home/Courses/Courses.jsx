import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CourseCard from "./CourseCard";

const Courses = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('https://study-sync-server-ten.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    // console.log(course);
    return (
        <div className="max-w-screen-xl mx-auto my-20">
            <SectionTitle
                heading={"Available Courses"}
                subHeading={"------Best Courses To Learn New Skills------"}>
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 pl-5 md:px-5">
                {
                    course.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;