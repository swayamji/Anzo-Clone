import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Tilttext = (props) => {

    useGSAP(function(){
      gsap.from('span',{
        y:50,
        opacity:0,
        duration:1,
        delay:1.3,
      })
    })

  return (
    <>
    <img className='max-lg:w-[10vw] max-lg:top-8 max-lg:left-12 fixed left-24 top-16 w-[5vw] max-md:top-4 max-md:left-6' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />

    <div id='ttt' ref={props.tiltRef} className='max-md:mt-[90vw] max-lg:pl-20 max-md:pl-3 mt-56 pl-28 w-fit max-md:'>
        <h1 className='uppercase max-md:tracking-[0.4vw] max-md:leading-[28vw]  max-md:text-[25vw] max-md:font-[anzo5] max max-lg:leading-[6.5vw] max-lg:text-[6vw] text-[4.3vw] font-[anzo2] leading-[5vw]'>I am <span id='Hmm' className='max-md:leading-[28vw]  max-md:text-[25vw] max-md:font-[anzo5] inline-flex text-black font-extrabold font-[anzo1]'>  Dark Mode</span><span className='max-md:hidden'>™</span></h1>
        <h1 className='uppercase max-md:tracking-[0.4vw] max-md:leading-[28vw]  max-md:text-[37vw] max-md:font-[anzo5] max max-lg:leading-[6.5vw] max-lg:text-[9.3vw] text-[8vw] font-[anzo2] leading-[5vw]'>Designer</h1>
        <h1  className='uppercase max-md:tracking-[0.4vw] max-md:leading-[28vw]  max-md:text-[25vw] max-md:font-[anzo5] max max-lg:leading-[6.5vw] max-lg:text-[6vw] text-[4.3vw] font-[anzo2] leading-[5vw]'>to hire.</h1>
    </div>
    </>
  )
}

export default Tilttext