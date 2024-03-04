"use client"
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";


const Slider = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const slides = [
            {
                id:1,
                img:"slider1.webp",
                title: "this is slider 1"
            },
            {
                id:2,
                img:"slider2.webp",
                title: "this is slider 2" 
            },
        ];

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };

    const nextSlide = () => {
        const isLastSlide = currentSlide === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newIndex);
    };

    const prevSlide = () => {
        const isFirstSlide = currentSlide === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newIndex);
    };
    return ( 
       <div className="max-w-[cover] h-[780px] w-full  m-auto relative">
        <div style={{backgroundImage: `url(${slides[currentSlide].img})`}} className="w-full h-full bg-center bg-cover duration-500 relative">
            <h2 className="absolute top-[75%] left-5 transform text-3xl font-bold text-white">Welcome to</h2>
            <h2 className="absolute top-[80%] left-5 transform text-2xl font-bold text-white">Padmashree International College</h2>
            <button className=" absolute top-[87%] left-5 bg-red-900 text-white p-5 rounded-md flex items-center gap-2 hover:bg-blue-800">Find more<FaArrowRightLong /></button>
            <div className="absolute top-[50%] transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:block" 
            ><BsChevronCompactLeft onClick={prevSlide} size={30} /></div>
            <div className="absolute top-[50%] transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:block"
            ><BsChevronCompactRight onClick={nextSlide} size={30} /></div>
        </div>
       </div>
    );
}
export default Slider;