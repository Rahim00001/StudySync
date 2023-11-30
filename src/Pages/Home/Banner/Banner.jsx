import { Button, Carousel } from 'flowbite-react'
import banner1 from '../../../assets/banner/banner.jpg'
import banner2 from '../../../assets/banner/banner02.jpg'
import banner3 from '../../../assets/banner/banner03.jpg'
import banner4 from '../../../assets/banner/banner04.jpg'
import banner5 from '../../../assets/banner/banner05.jpg'
const Banner = () => {
    return (
        <div className=" lg:h-screen">
            <Carousel>
                <div className="relative w-full bg-black">
                    <img src={banner1} className="w-full" />
                    <div className="absolute h-full flex md:px-20 items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                        <div className="md:space-y-7 w-4/5 md:w-2/3 text-center">
                            <h1 className="text-2xl md:text-5xl lg:text-7xl text-white font-bold mb-2">Fast Online Education Is Affordable</h1>
                            <p className="text-white md:mt-3 mb-2 md:mb-5">Teaching, tutoring and individual courses. <br></br> Provided with experience, care, thought and pride</p>
                            <div className='w-full flex justify-center'>
                                <Button>Discover More</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full bg-black">
                    <img src={banner2} className="w-full" />
                    <div className="absolute h-full flex md:px-20 items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                        <div className="md:space-y-7 w-4/5 md:w-2/3 text-center">
                            <h1 className="text-2xl md:text-5xl lg:text-7xl text-white font-bold mb-2">Top tutoring system for everyone</h1>
                            <p className="text-white md:mt-3 mb-2 md:mb-5">Teaching, tutoring and individual courses. <br></br> Provided with experience, care, thought and pride</p>
                            <div className='w-full flex justify-center'>
                                <Button>Discover More</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full bg-black">
                    <img src={banner3} className="w-full" />
                    <div className="absolute h-full flex md:px-20 items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                        <div className="md:space-y-7 w-4/5 md:w-2/3 text-center">
                            <h1 className="text-2xl md:text-5xl lg:text-7xl text-white font-bold mb-2">Learning Is Fun With Us</h1>
                            <p className="text-white md:mt-3 mb-2 md:mb-5">Teaching, tutoring and individual courses. <br></br> Provided with experience, care, thought and pride</p>
                            <div className='w-full flex justify-center'>
                                <Button>Discover More</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full bg-black">
                    <img src={banner4} className="w-full" />
                    <div className="absolute h-full flex md:px-20 items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                        <div className="md:space-y-7 w-4/5 md:w-2/3 text-center">
                            <h1 className="text-2xl md:text-5xl lg:text-7xl text-white font-bold mb-2">We Choose Creative Approch</h1>
                            <p className="text-white md:mt-3 mb-2 md:mb-5">Teaching, tutoring and individual courses. <br></br> Provided with experience, care, thought and pride</p>
                            <div className='w-full flex justify-center'>
                                <Button>Discover More</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full bg-black">
                    <img src={banner5} className="w-full" />
                    <div className="absolute h-full flex md:px-20 items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                        <div className="md:space-y-7 w-4/5 md:w-2/3 text-center">
                            <h1 className="text-2xl md:text-5xl lg:text-7xl text-white font-bold mb-2">Top tutoring system for everyone</h1>
                            <p className="text-white md:mt-3 mb-2 md:mb-5">Teaching, tutoring and individual courses. <br></br> Provided with experience, care, thought and pride</p>
                            <div className='w-full flex justify-center'>
                                <Button>Discover More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;