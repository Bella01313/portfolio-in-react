import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import { BiSolidUser } from "react-icons/bi";
import { BsBagHeartFill } from "react-icons/bs";
const home = () => {
  return (
   <>
    <section className="bg-slate-100 text-black min-h-[100vh]">
      <div
        className="bg-no-repeat bg-cover h-[100vh] md:h-[100vh] w-full bg bg-center opacity-90 text-black">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col items-center md: lg:flex-row lg:ml-[15rem] lg:w-[70%] lg:h-[80vh] gap-[1rem] mt-[2rem] ">
          <div className="w-[100%] flex items-center justify-center">
            <img
              src="images/DSC_2292.jpg"
              alt="bella"
              className="rounded-[100%] w-[16rem] h-[16rem] md:w-[20rem] md:h-[20rem]  lg:w-[20rem] lg:h-[20rem] object-cover border-[10px] border-[#dadada]"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center lg:flex lg:items-start">
              <span className="text-[20px] font-medium">HELLO THERE!</span>
              <span className="text-[2rem]">
                I'M
                <span className=" text-red-200 font-bold">
                  {" "}
                  Bella INGABIRE
                </span>
              </span>
              <span className="text-[2rem] font-bold">
                 Front-End Developer
              </span>
              <p className="text-xl text-center w-[80%] md:w-[80%] lg:text-left">
                I'm a Frontend Developer based in Kigali
                Rwanda. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
            </div>
            <div className="flex gap-[3rem] pt-5 mb-[3rem] md:mb-[2rem]">
              <button className="text-white py-4 px-6 rounded-full bg-red-200 flex items-center gap-2 md:flex md:flex-row lg:py-[1rem] lg:px-[1.5rem]">
                <BiSolidUser />
                MORE ABOUT ME
              </button>
              <button className="text-white py-4 px-6 rounded-full bg-red-200 flex  items-center gap-2 md:flex md:flex-row lg:py[1rem] lg:px-[1.5rem]">
                <BsBagHeartFill />
                PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </div>
      <div><About/></div>
      <div><Project/></div>
      <div><Contact/></div>
      <div><Footer/></div>
      </section>
   </>
  )
}

export default home