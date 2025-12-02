import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectCard({ project }) {
  useEffect(() => {
    AOS.init({
      duration: 900,   // smoother entrance
      once: true,
      easing: "ease-out-cubic", // smoother easing curve
      offset: 50,
    });
  }, []);

  return (
    <div
      data-aos={project.postion === "left" ? "fade-right" : "fade-left"}
      key={project.id}
      className="
        group relative bg-gray-900 
        rounded-2xl overflow-hidden 
        shadow-lg hover:shadow-3xl
        transform transition-all duration-500 
        hover:scale-[1.04]
        hover:-translate-y-1
        backdrop-blur-sm
      "
    >
      {/* Image */}
     <img
     loading="lazy"
  src={project.image}
  alt={project.name}
  className="
    w-full h-70
    object-contain 
    opacity-90 group-hover:opacity-100 
    transition-all duration-500 ease-out 
    group-hover:scale-105
    lg:object-cover
  "
/>


      {/* Content */}
      <div className="p-5">
        <h3 className="
          text-xl font-bold text-white 
          group-hover:text-blue-400 
          transition-all duration-400 ease-out
        ">
          {project.name}
        </h3>

        <p className="
          mt-1 text-sm text-gray-300 
          group-hover:text-gray-100 
          transition-all duration-400 ease-out
        ">
          {project.short}
        </p>
      </div>
    </div>
  );
}
