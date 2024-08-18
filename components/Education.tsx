'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Cover } from './ui/Cover';
import CountUp from 'react-countup';

const Education = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className='my-[100px] px-4 sm:px-10 flex flex-col justify-center items-center gap-20'>
      <h1 className='text-center text-[40px] sm:text-[60px] md:text-[80px] font-bold'>
        <Cover>EDUCATION</Cover>
      </h1>
      
      <div className="lg:w-[100%] flex flex-col md:flex-row gap-10 border-[3px] border-red-500 p-[15px] rounded-2xl bg-[rgb(4,7,29)] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgb(4,7,45)] hover:shadow-[0_0_10px_2px_rgb(255,0,0)]">
        <div className='w-full md:w-[20%] mb-4 md:mb-0 flex justify-center items-center'>
          <img src="./vit-logo.png" className="max-w-full max-h-full object-contain m-[10px]" />
        </div>
        <div className='w-full md:w-[80%] flex flex-col justify-center p-4'>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold m-2">
            <span className='hidden sm:inline bg-orange-600 py-[6px] px-[16px] rounded-2xl'>VELLORE INSTITUTE OF TECHNOLOGY, VELLORE</span>
            <span className='inline sm:hidden'>VELLORE INSTITUTE OF TECHNOLOGY, VELLORE</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium m-2">
            <span className='hidden sm:inline bg-pink-600 py-[6px] px-[16px] rounded-2xl'>B.Tech Computer Science Engineering</span>
            <span className='inline sm:hidden'>B.Tech Computer Science Engineering</span>
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium m-2">
            <span className='hidden sm:inline bg-green-600 py-[6px] px-[16px] rounded-2xl'>
              CGPA - &nbsp;
              {startCounting ? (
                <CountUp 
                  end={9.25} 
                  duration={5} 
                  decimals={2} 
                  decimal="."
                />
              ) : (
                <span>9.25</span>
              )}
            </span>
            <span className='inline sm:hidden'>
              CGPA - &nbsp;
              {startCounting ? (
                <CountUp 
                  end={9.25} 
                  duration={4.5} 
                  decimals={2} 
                  decimal="."
                />
              ) : (
                <span>9.25</span>
              )}
            </span>
          </h2>
        </div>
      </div>

      <div className="lg:w-[100%] flex flex-col md:flex-row gap-10 border-[3px] border-red-500 p-[15px] rounded-2xl bg-[rgb(4,7,29)] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[rgb(4,7,45)] hover:shadow-[0_0_10px_2px_rgb(255,0,0)]">
        <div className='w-full md:w-[80%] flex flex-col justify-center p-4'>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold m-2">
            <span className='hidden sm:inline bg-orange-600 py-[6px] px-[16px] rounded-2xl'>KENDRIYA VIDYALAYA IIT MADRAS</span>
            <span className='inline sm:hidden'>KENDRIYA VIDYALAYA IIT MADRAS</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium m-2">
            <span className='hidden sm:inline bg-pink-600 py-[6px] px-[16px] rounded-2xl'>Class I to XII</span>
            <span className='inline sm:hidden'>Class I to XII</span>
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium m-2">
            <span className='hidden sm:inline bg-green-600 py-[6px] px-[16px] rounded-2xl'>
              Class XII - &nbsp;
              {startCounting ? (
                <CountUp 
                  end={92.8} 
                  duration={4.5} 
                  decimals={2} 
                  decimal="."
                />
              ) : (
                <span>92.8</span>
              )}
            </span>
            <span className='inline sm:hidden'>
              Class XII - &nbsp;
              {startCounting ? (
                <CountUp 
                  end={92.8} 
                  duration={4.5} 
                  decimals={2} 
                  decimal="."
                />
              ) : (
                <span>92.8</span>
              )}
            </span>
          </h2>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium m-2">
            <span className='hidden sm:inline bg-green-600 py-[6px] px-[16px] rounded-2xl'>
              Class X - &nbsp;
              {startCounting ? (
                <CountUp 
                  end={94.8} 
                  duration={3} 
                  decimals={2} 
                  decimal="."
                />
              ) : (
                <span>94.8</span>
              )}
            </span>
            <span className='inline sm:hidden'>
              Class X - &nbsp;
              {startCounting ? (
                <CountUp 
                  end={94.8} 
                  duration={3} 
                  decimals={2} 
                  decimal="."
                />
              ) : (
                <span>94.8</span>
              )}
            </span>
          </h2>
        </div>
        <div className='w-full md:w-[20%] mb-4 md:mb-0 flex justify-center items-center'>
          <img src="./kviit-logo.svg" className="h-[210px] max-h-full object-contain m-[10px]" />
        </div>
      </div>
    </div>
  );
}

export default Education;
