import React, { useState, useRef } from 'react';
import ContactBG from'../assets/Project.mp4';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalIcon from '@mui/icons-material/Terminal';

import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef(); 
  const [submit, setSubmitStatus]=useState('Submit')
  const sendEmail=(e)=>{
    setSubmitStatus('Submitted')
    e.preventDefault();
    emailjs.sendForm('service_r2u66xk','template_uiec3cc',form.current, 'yGYJvPL77Lln5JEG9')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });


  }
  return (
    <>
         <video src={ContactBG} autoPlay loop muted className='bg-video' />
         <div className='flex w-full mt-32 lg:block md:mt-16'>
         <div className='text-xl text-white w-2/3 absolute ml-36  button-red md:left-0 md:w-2/3 md:mx-10 md:text-sm'>
         <form ref={form} onSubmit={sendEmail}>
      <div className='opacity-75 py-5 px-5 md:px-2 md:py-2 '>
        <label htmlFor="name" className='text-lg font-sans' >Name:</label>
        <input type="text" name="name" id="name" className=' rounded-lg mx-5 w-3/4 opacity-50 bg-black'required />
      </div>
      <div className='opacity-75 py-5 px-5 md:px-2 md:py-2'>
        <label htmlFor="email" className='text-lg font-sans'>Email:</label>
        <input type="email" name="email" id="email" required className=' rounded-lg w-3/4  mx-5 opacity-50 bg-black' />
      </div>
      <div className='opacity-75 py-5 px-5 md:px-2 md:py-2'>
        <label htmlFor="message" className='text-lg font-sans'>Pen:</label>
        <textarea id="message" name="message" required className=' rounded-lg mr-5 ml-10 w-3/4 opacity-50 bg-black' />
      </div>
      <button type="submit" value="Send" className='font-sans rounded-lg py-2 px-2 my-5 mx-5 text-lg border-double border border-black hover:bg-white hover:text-red-800'>{submit}</button>
    </form>
</div>
<div className='block w-1/2 absolute left-0 md:left-0 md:w-2/3 md:mx-10'>
 
  <Link to='https://www.linkedin.com/in/shubham-kumar-jha-164524240'><button className="button-red w-2/3 m-2"><LinkedInIcon/></button></Link>
  <Link to='https://github.com/Shubham23jha	'><button className="button-red w-2/3 p-2 m-2"><GitHubIcon/></button></Link>
  <Link to='https://leetcode.com/Shubham23_jha/'><button className="button-red w-2/3 p-2 m-2"><TerminalIcon/></button></Link>
 
</div>

    </div>
    </>
  )
}

export default Contact
