import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="carousel h-[600px] w-full">
        <div id="slide1" className="carousel-item relative w-full  ">
          <img src={banner1} className="w-full rounded-2xl" />
          <div className="absolute flex items-center gap-5  h-full   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl">
            <div className='text-white font-bold space-y-6 ml-12'>
                <h1 className='text-6xl w-[225px]'>Affordable Price For Car Servicing</h1>
                <p className='h-[60px] lg:w-[522px] w-full'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-active btn-primary mr-10 mt-10">Button</button>
                    <button className="btn btn-active btn-secondary">Button</button>
                </div>
            </div>
           
          </div>
          <div className="absolute flex    right-5 bottom-7 gap-5">
            <a href="#slide4" className="btn btn-circle"><FaArrowRight></FaArrowRight></a> 
            <a href="#slide2" className="btn btn-circle btn-active"><FaArrowLeft></FaArrowLeft></a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full  ">
          <img src={banner2} className="w-full rounded-2xl" />
          <div className="absolute flex items-center gap-5  h-full   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl">
            <div className='text-white font-bold space-y-6 ml-12'>
                <h1 className='text-6xl w-[225px]'>Affordable Price For Car Servicing</h1>
                <p className='h-[60px] lg:w-[522px] w-full'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-active btn-primary mr-10 mt-10">Button</button>
                    <button className="btn btn-active btn-secondary">Button</button>
                </div>
            </div>
           
          </div>
          <div className="absolute flex    right-5 bottom-7 gap-5">
            <a href="#slide3" className="btn btn-circle"><FaArrowRight></FaArrowRight></a> 
            <a href="#slide1" className="btn btn-circle btn-active"><FaArrowLeft></FaArrowLeft></a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full  ">
          <img src={banner3} className="w-full rounded-2xl" />
          <div className="absolute flex items-center gap-5  h-full   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl">
            <div className='text-white font-bold space-y-6 ml-12'>
                <h1 className='text-6xl w-[225px]'>Affordable Price For Car Servicing</h1>
                <p className='h-[60px] lg:w-[522px] w-full'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-active btn-primary mr-10 mt-10">Button</button>
                    <button className="btn btn-active btn-secondary">Button</button>
                </div>
            </div>
           
          </div>
          <div className="absolute flex    right-5 bottom-7 gap-5">
            <a href="#slide4" className="btn btn-circle"><FaArrowRight></FaArrowRight></a> 
            <a href="#slide2" className="btn btn-circle btn-active"><FaArrowLeft></FaArrowLeft></a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full  ">
          <img src={banner4} className="w-full rounded-2xl" />
          <div className="absolute flex items-center gap-5  h-full   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl">
            <div className='text-white font-bold space-y-6 ml-12'>
                <h1 className='text-6xl w-[225px]'>Affordable Price For Car Servicing</h1>
                <p className='h-[60px] lg:w-[522px] w-full'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div>
                <button className="btn btn-active btn-primary mr-10 mt-10">Button</button>
                    <button className="btn btn-active btn-secondary">Button</button>
                </div>
            </div>
           
          </div>
          <div className="absolute flex    right-5 bottom-7 gap-5">
            <a href="#slide1" className="btn btn-circle"><FaArrowRight></FaArrowRight></a> 
            <a href="#slide3" className="btn btn-circle btn-active"><FaArrowLeft></FaArrowLeft></a>
          </div>
        </div>
        
      </div>
    );
};

export default Banner;