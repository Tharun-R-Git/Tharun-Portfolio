import React from 'react';
import { Label } from './ui/Label';
import { Input } from './ui/Input';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[40px] p-5 scale-75 transform origin-top'>
      <h1 className='text-center text-4xl sm:text-5xl md:text-6xl font-bold'>
        Contact Me
      </h1>

      <div className='flex flex-row gap-5 sm:gap-10 mt-5 bg-gray-800 p-5 rounded-3xl'>
        <a
          href="https://www.linkedin.com/in/tharun-ravisubramanian"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 bg-blue-700 rounded-full hover:bg-blue-900"
        >
          <LinkedInIcon fontSize='large' />
        </a>

        <a
          href="mailto:tharun.r2022@vitstudent.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 bg-red-500 rounded-full hover:bg-red-700"
        >
          <EmailIcon fontSize='large' />
        </a>

        <a
          href="https://github.com/Tharun-R-Git"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 bg-green-500 rounded-full hover:bg-green-700"
        >
          <GitHubIcon fontSize='large' />
        </a>

        <a
          href="./R_THARUN_RESUME.pdf"
          download="R_THARUN_RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 bg-orange-500 rounded-full hover:bg-orange-600"
        >
          <DownloadIcon fontSize='large' />
        </a>
      </div>

      <div className='flex flex-col gap-6 w-full sm:w-[80vw] md:w-[60vw] lg:w-[40vw] max-w-4xl justify-center items-center mx-10 mb-10 mt-5 p-10 rounded-[35px] border-[2px] border-blue-400 shadow-[0_0_15px_5px_rgba(0,0,255,0.7)]'>
        <div className='flex flex-col gap-2 w-full justify-center items-center'>
          <Label htmlFor='name'>Name</Label>
          <Input type='text' id='name' placeholder='Your Name' className='w-full md:w-[25vw]' />
        </div>

        <div className='flex flex-col gap-2 w-full justify-center items-center'>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' placeholder='Your Email' className='w-full md:w-[25vw]' />
        </div>

        <div className='flex flex-col gap-2 w-full justify-center items-center'>
          <Label htmlFor='message'>Message</Label>
          <textarea
            id='message'
            placeholder='Your Message'
            className='w-full md:w-[25vw] h-[150px] p-3 border rounded-md bg-zinc-800 resize-none'
          />
        </div>
        <div className='flex flex-col gap-2 w-full justify-center items-center'>
          <Input type='submit' value='Send Message' className='w-full md:w-[10vw] cursor-pointer p-2 mt-0' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
