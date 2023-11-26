import { Button, Card } from 'flowbite-react';
import Swal from 'sweetalert2';
const CourseCard = ({ course }) => {
    const handleEnroll = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Hurray!!!",
            text: "Your Enrollment Done",
            showConfirmButton: false,
            timer: 1500
        });
    }
    const { img, title, teacher, price, total_class, total_student } = course;
    // console.log(course);
    return (
        <div>
            <Card
                className="max-w-sm h-[520px]"
                imgSrc={img}
            >
                <div className='flex justify-between'>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {teacher}
                    </h5>

                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-gray-900 dark:text-white">Total class: {total_class}</span>
                    <span className="text-xl font-semibold text-gray-900 dark:text-white">Total Enroll: {total_student}</span>

                </div>
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white mb-2">${price}</span>
                    <Button onClick={handleEnroll}>Enroll Now</Button>
                </div>
            </Card>
        </div>
    );
};

export default CourseCard;