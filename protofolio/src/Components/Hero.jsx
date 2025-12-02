import { useState } from "react";
import HeroImage from "./HeroImage";
import { UseGoes } from "../Context/GoContext";

export default function Hero() {
  const [whatsapp] = useState("https://wa.me/962782584258");
  const { Contact } = UseGoes();

  function scrollToContact() {
    Contact.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative z-20 flex items-center bg-white dark:bg-gray-800 overflow-hidden">
      <div
        className="
          relative mx-auto w-full 
          flex flex-col-reverse lg:flex-row
          px-6 sm:px-10 lg:px-20
          py-12 md:py-20 
          gap-10 md:gap-16 lg:gap-20
          max-w-[1400px]
        "
      >
        {/* ==== LEFT CONTENT ====*/}

        <div className="relative z-20 flex flex-col w-full lg:w-2/5">
          <span className="w-16 h-2 mb-6 md:mb-10 bg-gray-800 dark:bg-white rounded"></span>

          <h1
            className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            font-black leading-tight uppercase 
            text-gray-800 dark:text-white font-bebas-neue
          "
          >
            Jameel
            <span
              className="
                block mt-1
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              "
            >
              Handomeh
            </span>
          </h1>

          <p
            className="
            mt-4
            text-sm sm:text-base md:text-lg
            text-gray-700 dark:text-gray-300
            leading-relaxed
          "
          >
            A Full Stack Web Developer specializing in modern applications using
            React for the front end and Node.js Express.js with MongoDB for the
            back end. I write clean, maintainable code, focus on user-friendly
            UI, and build scalable systems. I love improving my skills and
            creating real-world projects with meaningful impact.
          </p>

          {/* BUTTONS */}
          <div className="flex mt-6 sm:mt-8 flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="
                px-5 sm:px-6 py-2.5 sm:py-3 
                text-white font-bold uppercase 
                bg-blue-500 rounded-lg border-2 border-transparent
                text-sm sm:text-md hover:bg-blue-400 transition
              "
            >
              Contact Me
            </button>

            <a
              href={whatsapp}
              className="
                px-5 sm:px-6 py-2.5 sm:py-3 
                text-green-500 font-bold uppercase 
                bg-transparent border-2 border-green-500 rounded-lg
                hover:bg-green-500 hover:text-white
                text-sm sm:text-md transition
              "
            >
              WhatsApp Me
            </a>
          </div>
        </div>

        {/* ==== IMAGE SECTION ==== */}
        <div className="w-full lg:w-3/5 flex justify-center lg:justify-end">
          <HeroImage className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" />
        </div>
      </div>
    </section>
  );
}
