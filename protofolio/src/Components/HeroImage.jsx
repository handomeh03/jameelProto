import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function HeroImage() {
     useEffect(() => {
    AOS.init({
      duration: 600, 
      once: true,     
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div
  data-aos="zoom-out"
  className="relative hidden lg:flex justify-center w-full lg:w-3/5 mt-8 lg:mt-0"
>
  
  <div className="absolute w-[520px] h-[520px] bg-white rounded-full blur-3xl opacity-40 -z-10"></div>

  
  <img
    src="/521888896_17902021725219017_632469208479545795_n.jpg"
    className="w-40 sm:w-56 md:w-72 lg:w-[500px] h-[500px] rounded-full object-cover shadow-lg"
    alt="Hero"
  />
</div>

  );
}
