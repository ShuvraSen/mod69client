import React from 'react';
import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
         <div className='relative  w-1/2'>
         <img src={parts} className="rounded-lg shadow-2xl w-3/4" />
         <img src={person} className=" rounded-lg shadow-2xl absolute top-1/2 right-5 w-1/2" />
         </div>
          <div className='flex-shrink w-1/2'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn btn-primary">Get more Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;