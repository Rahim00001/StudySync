import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // const [rating, setRating] = useState(4);

    useEffect(() => {
        fetch('https://study-sync-server-ten.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <SectionTitle
                heading={"Testimonial"}
                subHeading={"------What Our Student Say------"}>
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='w-full flex justify-center mb-5 mt-10'>
                            <img className='w-32 h-32 rounded-full' src={review.img} alt="" />
                        </div>
                        <div className="flex flex-col items-center px-28">
                            <Rating
                                style={{ maxWidth: 200 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="text-center text-xl text-[#444] mt-5 mb-3">{review.details}</p>
                            <h2 className="text-3xl font-medium text-[#CD9003]">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;