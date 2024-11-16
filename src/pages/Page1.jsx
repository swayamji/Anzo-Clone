import React, { useRef, useState } from 'react'
import Tilttext from '../Components/Tilttext'
import Page1Bottom from '../Components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {
    const tiltRef = useRef(null)
    const [xVal, setxVal] = useState(0)
    const [yVal, setyVal] = useState(0)

    const mouseMoving =(e)=>{
      //console.log(tiltRef.current.getBoundingClientRect())
        if(window.innerWidth>=768){
          
      setxVal((e.clientX-tiltRef.current.getBoundingClientRect().x-tiltRef.current.getBoundingClientRect().width/2)/20)
      setyVal(-(e.clientY-tiltRef.current.getBoundingClientRect().y-tiltRef.current.getBoundingClientRect().height/2)/20)

      tiltRef.current.style.transform= `rotateX(${yVal}deg) rotateY(${xVal}deg)`
        }
    }

    useGSAP(function(){
      gsap.to(tiltRef.current,{
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration:20,
        ease:'power4.out'
      })
    },[xVal,yVal])

  return (
    <div 
        onMouseMove={(e) => mouseMoving(e)} className='h-screen max-md:h-[200vh] bg-white p-4 max-md:p-1 flex flex-col'>

        <div id='ppp' className='py-22 relative text-white h-full rounded-[50px] bg-center bg-cover  w-full 
        max-lg:bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_962,h_971,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1865,h_953,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]'>

            <Tilttext tiltRef={tiltRef} />
            <Page1Bottom />
        </div>        
    </div>

  )
}

export default Page1