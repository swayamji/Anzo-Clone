import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  
 useGSAP(function(){
  if(window.innerWidth>768){
    gsap.from('.bottom',{
      y: 50,
        opacity: 0,
        duration:1,
        delay:0.5,
        scrollTrigger: {
          trigger: '.bH1',
          markers: false,
          start: "top 50%",    // Start animation when top of .section4 is 80% down the viewport
          end: "top 30%",      // End animation when top of .section4 is 40% down the viewport
          scrub: 1,
          once:true
      }
    }),
    gsap.to('.rotatee', {
      rotate: 120,
      duration: 14,
      repeat: -1,
      ease: 'linear',
      transformOrigin: 'center', // Optional, ensures rotation around the center
  });
  
  }
 })

  return (
    <div className='section4 bg-white max-md:h-[80vw] h-screen p-5 relative overflow-hidden '>
      <div className='rotation h-[49vw] max-md:h-[60vw] w-full rounded-[50px] max-md:rounded-[30px] bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1865,h_953,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Background%20Anzo_Studio.jpg)]'>
      <img className='rotatee max-md:top-5 w-[40vw] opacity-90 absolute right-10' src="src\assets\11383065.svg" alt="" />

        <div className='left text-white font-[anzo5] text-[20vw] leading-[16vw] p-[4.5vw] tracking-wide max-md:text-[22vw] max-md:leading-[20vw]'>
          <h1 className='text-[#9B9B9B]'>WHAT</h1>
          <h1 className='bH1'>I DO</h1>
        </div>
          
        <div className='bottom text-[1.3vw] text-white absolute bottom-14 left-8 max-md:bottom-5 max-md:left-4 max-md:text-[1.7vw] leading-[1.75vw]'>
          <h4 className='font-[anzo4]'>I DESIGN AND DEVELOP</h4>
          <h4 className='font-[anzo3] text-gray-400'>MODERN, IMPACTFUL AND LUXURIOUS</h4>
          <h5 className='font-[anzo4]'>websites that seamlessly bridge your goals with needs of your clients</h5>
        </div>
      </div>
    </div>
  );
};

export default Page4;
