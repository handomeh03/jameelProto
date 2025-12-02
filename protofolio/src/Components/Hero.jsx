import { useState } from "react";
import HeroImage from "./HeroImage";
import { UseGoes } from "../Context/GoContext";

export default function Hero() {
    let [whatsapp]=useState("https://wa.me/962782584258");
    let {Contact}=UseGoes();
    function scrollToContact() {
        Contact.current.scrollIntoView({behavior:"smooth"});
      }
  return (
    <section className="relative z-20 flex items-center bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container relative flex flex-col-reverse lg:flex-row px-6 py-12 md:py-20 mx-auto gap-10">
        
        {/* Left Section */}
        <div className="relative z-20 flex flex-col w-full lg:w-2/5">
          <span className="w-16 h-2 mb-8 bg-gray-800 dark:bg-white md:mb-12"></span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-gray-800 uppercase dark:text-white font-bebas-neue">
            Jameel
            <span className="block text-3xl sm:text-4xl md:text-6xl">
              Handomeh
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
            A Full Stack Web Developer specializing in modern applications using 
            React for the front end and 
             Node.js  Express.js with 
             MongoDB for the back end. I write clean, maintainable code, 
            focus on user-friendly UI, and build scalable systems. I love improving my 
            skills and creating real-world projects with meaningful impact.
          </p>

          <div className="flex mt-6 sm:mt-8 flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="px-5 hover:cursor-pointer font-bold py-2.5 sm:px-6 sm:py-3 text-white uppercase bg-blue-500 border-2 border-transparent rounded-lg text-sm sm:text-md hover:bg-blue-400"
            >
              Contant Me
            </button>

            <a
              href={whatsapp}
              className="px-5 font-bold py-2.5 sm:px-6 sm:py-3 text-green-500 uppercase bg-transparent border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-white text-sm sm:text-md"
            >
              whatsApp Me
            </a>
          </div>
        </div>

        
        <HeroImage />
      </div>
    </section>
  );
}
