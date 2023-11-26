import { Button, Carousel } from 'flowbite-react'
import banner1 from '../../../assets/banner/banner.jpg'
import banner2 from '../../../assets/banner/banner02.jpg'
import banner3 from '../../../assets/banner/banner03.jpg'
import banner4 from '../../../assets/banner/banner04.jpg'
import banner5 from '../../../assets/banner/banner05.jpg'
const Banner = () => {
    return (
        <div className="h-screen">
            <Carousel>
                <div className="relative w-full bg-black">
                    <img src={banner1} className="w-full" />
                    <div className="absolute h-full flex px-20 items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                        <div className="space-y-7 w-2/3 text-center">
                            <h1 className="text-7xl text-white font-bold">Fast Online Education Is Affordable</h1>
                            <p className="text-white mt-3 mb-5">Teaching, tutoring and individual courses. <br></br> Provided with experience, care, thought and pride</p>
                            <div className='w-full flex justify-center'>
                                <Button>Discover More</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full bg-black">
                    <img src={banner2} className="w-full" />
                    <div className="absolute h-full flex px-20 items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                        <div className="space-y-7 w-2/3 text-center">
                            <h1 className="text-7xl text-white font-bold">Top tutoring system for everyone</h1>
                            <p className="text-white mt-3 mb-5">Teaching, tutoring and individual courses. <br></br> Provided with experience, care, thought and pride</p>
                            <div className='w-full flex justify-center'>
                                <Button>Discover More</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full bg-black">
                    <img src={banner3} className="w-full" />
                    <div className="absolute h-full flex px-20 items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                        <div className="space-y-7 w-1/2 text-center">
                            <h1 className="text-7xl text-white font-bold">Learning Is Fun With Us</h1>
                            <p className="text-white mt-3 mb-5">Teaching, tutoring and individual courses. <br></br> Provided with experience, care, thought and pride</p>
                            <div className='w-full flex justify-center'>
                                <Button>Discover More</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full bg-black">
                    <img src={banner4} className="w-full" />
                    <div className="absolute h-full flex px-20 items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                        <div className="space-y-7 w-1/2 text-center">
                            <h1 className="text-7xl text-white font-bold">We Choose Creative Approch</h1>
                            <p className="text-white mt-3 mb-5">Teaching, tutoring and individual courses. <br></br> Provided with experience, care, thought and pride</p>
                            <div className='w-full flex justify-center'>
                                <Button>Discover More</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full bg-black">
                    <img src={banner5} className="w-full" />
                    <div className="absolute h-full flex px-20 items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                        <div className="space-y-7 w-2/3 text-center">
                            <h1 className="text-7xl text-white font-bold">Top tutoring system for everyone</h1>
                            <p className="text-white mt-3 mb-5">Teaching, tutoring and individual courses. <br></br> Provided with experience, care, thought and pride</p>
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