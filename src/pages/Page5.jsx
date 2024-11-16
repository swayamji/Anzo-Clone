import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'

const Page5 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function(){
        if(window.innerWidth>1024){
         gsap.from('.same1',{
             transform:'rotateX(-80deg)',
             duration:1,
             opacity:0,
             stagger:1,
            scrollTrigger:{
             trigger:'.same1',
             markers:false,
             start:"top 60%",
             end:"top -300%",
             scrub:1,
             once:true
            }
         })
        }
       else if(window.innerWidth<=1024 && window.innerWidth>768){
         gsap.from('.same1',{
             transform:'rotateX(-80deg)',
             duration:3,
             opacity:0,
             stagger:1,
            scrollTrigger:{
             trigger:'.same1',
             markers:false,
             start:"top 60%",
             end:"top -120%",
             scrub:1,
             once:true
            }
         })
        }
        else{
         gsap.from('.same1',{
             transform:'rotateX(-80deg)',
             duration:1,
             opacity:0,
             stagger:0.5,
            scrollTrigger:{
             trigger:'.same1',
             markers:false,
             start:"top 60%",
             end:"top -30%",
             scrub:1,
             once:true
            }
         })
        }
     })
  return (
    <div className='section2 bg-white text-center p-16 max-md:p-8  text-black overflow-x-hidden'>
        
        <div className='same1 mt-[6vw] max-md:mt-[-10vw]'>
            <h2 className=' text-[40vw] leading-[35vw] font-[anzo5]'>HELPING</h2>
        </div>
        <div className='same1'>
            <h2 className='text-[40vw] leading-[35vw] font-[anzo5] opacity-50'>MY</h2>
        </div>
        <div className='same1'>
            <h2 className='text-[40vw] leading-[35vw] font-[anzo5]'>CLIENTS</h2>
        </div>
        <div className='same1' >
            <h2 className='text-[40vw] leading-[35vw] font-[anzo5]' >TO ACHIEVE</h2>
        </div>
        <div className='same1'>
            <h2 className='text-[40vw] leading-[35vw] font-[anzo5] opacity-50'>THEIR</h2>
        </div>
        <div className='same1'>
            <h2 className='text-[40vw] leading-[35vw] font-[anzo5]'>DREAMS!</h2>
        </div>
    </div>
  )
}

export default Page5