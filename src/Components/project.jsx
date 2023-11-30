import React, { useState } from 'react';
import ProjectBG from '../assets/Project.mp4';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Project() {
  const intro1='Leveraging the power of Deep Neural Network Model was trained to give....'
  const intro2='Developed a powerful web API for seamless and secure user registration....'
  const intro3='Designed and developed a captivating front-end website to showcase Nike.... '
  const [text1, setText1] = useState(intro1);
  const [text2, setText2] = useState(intro2);
  const [text3, setText3] = useState(intro3);

  const project1 = 'Leveraging the power of Deep Neural Network, Model was trained to give 100% accurate result. We used Force Plate sensor data recorded in Gait Gutenberg and Gait Rec Dataset to train our Model. Model was tested with Machine Learning Models as well but we found 100% accuracy with DNN. This was a DRDO project which was done as group project during graduation at IIIT KALYANI';
  const project2 = 'Developed a powerful web API for seamless and secure user registration and authentication, built with Node.js, Express.js, Mongoose, bcrypt, and other dependencies. JSON Web Tokens (JWT) was used for robust data protection.Technologies Used: Node.js,Express.js,MongoDB';
  const project3 = 'Designed and developed a captivating front-end website to showcase Nike trendiest shoe collection, demonstrating meticulous attention to detail and creative design.Technologies Used: HTML, CSS';

  const handleMouseEnter1 = () => {
    setText1(project1);
  };

  const handleMouseLeave1 = () => {
    setText1(intro1);
  };

  const handleMouseEnter2 = () => {
    setText2(project2);
  };

  const handleMouseLeave2 = () => {
    setText2(intro2);
  };

  const handleMouseEnter3 = () => {
    setText3(project3);
  };

  const handleMouseLeave3 = () => {
    setText3(intro3);
  };

  return (
    <div>
      <video src={ProjectBG} autoPlay loop muted className="bg-video" />
      <div className="flex justify-around absolute bottom-10 md:bottom-0 md:absolute content-end md:block md:px-10 md:w-full">
        <div
          className="w-1/4 py-10 px-10 bg-card md:w-full md:py-2 md:px-2 md:my-10 md:justify-center "
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <h1 className="text-lg font-semibold">Early Detection Of Gait Abnormality</h1>
          <p className="text-md">{text1}</p>
          <Link to='https://github.com/ChandniJha630/Early-Detection-Of-Gait-Abnormality'>
            <button className="w-full">
              <GitHubIcon />
            </button>
          </Link>
        </div>
        <div
          className="w-1/4 py-10 px-10 bg-card md:w-full md:py-2 md:px-2 md:my-10 md:justify-center"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <h1 className="text-lg font-semibold">User Registration Authentication API</h1>
          <p className="text-md">{text2}</p>
          <Link to='https://github.com/Shubham23jha/Registration-Authentication'>
            <button className="w-full">
              <GitHubIcon />
            </button>
          </Link>
        </div>
        <div
          className="w-1/4 py-10 px-10 bg-card md:w-full md:py-2 md:px-2 md:my-10 md:justify-center"
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        >
          <h1 className="text-lg font-semibold">Nike  Shoes Website</h1>
          <p className="text-md">{text3}</p>
          <Link to='https://shubham23jha.github.io/Shoes-Website/'>
            <button className="w-full mt-2">
              <GitHubIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
