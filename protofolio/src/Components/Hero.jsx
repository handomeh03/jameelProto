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
    <div className=" flex items-center bg-white dark:bg-gray-800 overflow-hidden">
  <div className="container mx-auto relative flex flex-col-reverse lg:flex-row px-6 py-12 md:py-20 gap-10">
    
    {/* Left Section */}
    <div className="relative z-20 flex flex-col w-full lg:w-2/5">
      {/* Decorative Line */}
      <span className="w-16 h-2 mb-6 md:mb-12 bg-gray-800 dark:bg-white rounded-full"></span>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-gray-800 uppercase dark:text-white font-bebas-neue">
        Jameel
        <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2">
          Handomeh
        </span>
      </h1>

      {/* Paragraph */}
      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        A Full Stack Web Developer specializing in modern applications using 
        React for the front end and Node.js, Express.js with MongoDB for the back end. 
        I write clean, maintainable code, focus on user-friendly UI, and build scalable systems. 
        I love improving my skills and creating real-world projects with meaningful impact.
      </p>

      {/* Buttons */}
      <div className="flex mt-6 sm:mt-8 flex-wrap gap-4">
        <button
          onClick={scrollToContact}
          className="px-5 sm:px-6 py-2.5 sm:py-3 text-white font-bold uppercase bg-blue-500 border-2 border-transparent rounded-lg text-sm sm:text-md hover:bg-blue-400 transition"
        >
          Contact Me
        </button>

        <a
          href={whatsapp}
          className="px-5 sm:px-6 py-2.5 sm:py-3 text-green-500 font-bold uppercase bg-transparent border-2 border-green-500 rounded-lg text-sm sm:text-md hover:bg-green-500 hover:text-white transition"
        >
          WhatsApp Me
        </a>
      </div>
    </div>

    {/* Right Section (Hero Image) */}
    <div className="w-full lg:w-3/5 flex justify-center lg:justify-end">
      <HeroImage className="w-full max-w-md lg:max-w-xl xl:max-w-2xl" />
    </div>

  </div>
</div>

  );
}
