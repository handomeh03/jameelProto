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
      className="relative flex justify-center w-full mt-8 lg:mt-0"
    >
      {/* الخلفية الضبابية */}
      <div className="absolute w-72 sm:w-96 md:w-[400px] lg:w-[520px] h-72 sm:h-96 md:h-[400px] lg:h-[520px] bg-white rounded-full blur-3xl opacity-40 -z-10"></div>

      {/* الصورة */}
      <img
        src="/521888896_17902021725219017_632469208479545795_n.jpg"
        className="w-40 sm:w-56 md:w-72 lg:w-[500px] h-40 sm:h-56 md:h-72 lg:h-[500px] rounded-full object-cover shadow-lg"
        alt="Hero"
      />
    </div>
  );
}
