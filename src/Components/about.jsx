import React from 'react';
import aboutbackground from '../assets/aboutbackground.mp4'
import { Link } from 'react-router-dom';
import DP from '../assets/dp.jpeg'
const About = () => {
  return (
      <>
         <video src={aboutbackground} autoPlay loop muted className='bg-video'/>
        <div className="w-full flex justify-around lg:block lg:mt-16">

            <div className='w-1/3 justify-center py-10 px-5 block lg:w-full lg:absolute lg:top-0 lg:mt-24' >
            <p className='text-black text-xl backdrop-blur-lg p-10  text-left md:text-sm'>
              Hello Everyone, I am Shubham Kumar Jha a third year engineering undergraduate at Indian Institute Of Information 
              Technology Kalyani. I am native Indian. I am a passionate full stack web developer. 
              I am proficient in many programming languages like C, C++, Python, Javascript. And I use MERN stack technologies for web developement.
            </p>
            <Link to='https://docs.google.com/document/d/1enjTBOfxnoQWC3kSGwMtmgYLx44TESoF/edit?usp=sharing&ouid=112310467060624981802&rtpof=true&sd=true'>
              <button className="button-67 mx-5 my-10 ">
                View Resume
              </button></Link>
              </div>
              <div className='w-1/3 h-1/4 mt-5 justify-center bg-slate-300 rotate-12 lg:invisible'>
              <img src={DP} alt="My Image" className='py-10  px-2 hover:animate-pulse lg:py-2 lg:px-2'/>
              </div>
              </div>
              <div className="flex bottom-10">
                
              </div>
          </> 
  );
};

export default About;
