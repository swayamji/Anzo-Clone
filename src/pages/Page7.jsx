import { useGSAP } from '@gsap/react'
import gsap, { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page7 = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function(){
        gsap.to('.rotate1',{
            rotate:360,
            duration:5,
            repeat:-1,
            ease:'linear'
        }),
        gsap.to('.rotate2',{
            rotateY:360,
            duration:5,
            repeat:-1,
            ease:'linear'
        }),
        gsap.to('.rotate3', {
            y: -10,          // Moves the element up by 10px for the bounce
            scaleY: 0.85,     // Slightly squashes the element vertically
            duration: 3,   // Adjust the duration for the speed of the bounce
            repeat: -1,      // Infinite loop
            yoyo: true,      // Returns the element to its original position smoothly
            ease: 'bounce.out', // Bounce effect on the downward motion
        }),
        gsap.to('.imgRotate',{
            rotate:120,
            duration:50,
            overflow:'hidden',
            scrollTrigger:{
                trigger:'.Hero',
                start:'top 100%',
                end:'top 10%',
                scrub:1
            }
        }),
        gsap.to('.changeColor',{
            color:'#fff',
            duration:3,
            stagger:1,
            scrollTriiger:{
                trigger:'.changeColor',
                markers:true,
                start:'top 20%',
                end:'top 10%',
                scrub:1
            }
        })
        
        
    })

  return (
    <>
        <div className='h-screen max-md:h-[80vw] bg-white max-md:mx-0 max-md:p-2 p-6 mx-5'>
            <div className='section7 max-md:w-full bg-black w-full h-[70vw] rounded-[50px] relative overflow-hidden'>
                <img className='imgRotate w-[60vw] py-[12vw] mx-[19vw] absolute opacity-80 select-none' src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_auto/triangle%203.png" alt="" />

                <div className='Hero max-md:mt-6 absolute top-1 flex gap-[44vw] mt-24'> 
                <h1 className='text-[#9B9B9B] text-[20vw] font-[anzo5] leading-[16vw] ml-[5vw]'>HOW <span className='text-white'> <br />CAN</span></h1>
                <h1 className='text-white text-[20vw] font-[anzo5] leading-[16vw] text-right'>I HELP <br /> YOU</h1>
                </div>

                <div className='hey max-md:top-[33vw] absolute top-[38vw] w-full h-[25vw] flex max-md:gap-2 gap-20 items-center text-[1.3vw] leading-[1.8vw] font-[anzo2] text-[#9B9B9B] max-md:px-8 p-20'>

                    <div>
                        <h1 className='w-[27vw]'><span className='changeColor'>I am a self-taught web and brand designer with a passion for creating unique and timeless masterpieces</span> for ambitious professionals, entrepreneurs, artists, and boutique businesses.Bespoke Freelance for agencies.</h1>
                        <div className='flex mt-16 max-md:mt-5 items-baseline max-md:items-start gap-[2vw]'>
                        <img className='rotate1 max-md:w-[1vw]' src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_85,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SUN.png" alt="" />
                        <h3 className='font-[anzo5] text-[4.5vw] text-white'>DESIGN <span className='text-[1.3vw] font-[anzo2]'>01</span></h3>
                        </div>
                    </div>

                    <div>
                        <h1  className='w-[28vw]'><span className='changeColor'>With a background in strategic marketing and acknowledged expertise in web development, I aim to minimize my client's</span> resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.</h1>
                        <div className='flex mt-16 max-md:mt-5 items-baseline  max-md:items-start gap-[2vw]'>
                        <img className='rotate2 max-md:w-[4vw]' src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_82,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EARTH.png" alt="" />
                        <h3 className='font-[anzo5] text-[4.5vw] text-white'>DEVELOPMENT <span className='text-[1.3vw] font-[anzo2]'>02</span></h3>
                        </div>
                    </div>

                    <div>
                        <h1 className='w-[27vw]'><span className='changeColor'>My mission is to drive exceptional growth for my clients by increasing their brand appearance, defining their identity, and</span> engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.</h1>
                        <div className='flex mt-16 max-md:mt-5 items-baseline max-md:items-start gap-[2vw]'>
                        <img className='rotate3 max-md:w-[4vw]' src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_82,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/START%20UP.png" alt="" />
                        <h3 className='font-[anzo5] text-[4.5vw] text-white'>BRANDING <span className='text-[1.3vw] font-[anzo2]'>03</span></h3>
                        </div>
                    </div>

                </div>
                <div className='absolute bottom-10 max-md:bottom-2 max-md:left-8 text-[#9B9B9B] font-[anzo3] text-[1.2vw] left-16 leading-[1.6vw]'>
                    <h1>GOT A PROJECT? <br /> THEN PLEASE <a className='font-[anzo4] text-white' href="#"> CONTACT ME</a></h1>
                </div>
             </div>
        </div>
    </>
  )
}

export default Page7