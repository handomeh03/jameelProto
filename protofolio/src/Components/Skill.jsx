import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { UseGoes } from "../Context/GoContext";

export default function Skills() {
  
       let {Skill}=UseGoes();
      
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  const skills = [
    { name: "HTML", image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png", color: "from-orange-400 to-orange-600" },
    { name: "CSS", image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png", color: "from-blue-400 to-blue-600" },
    { name: "Tailwind", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042", color: "from-blue-400 to-blue-600" },
    { name: "MUI", image: "https://mui.com/static/logo.png", color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", image: "https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg", color: "from-yellow-300 to-yellow-500" },
    { name: "React", image: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png", color: "from-cyan-400 to-cyan-600" },
    { name: "Angular", image: "https://www.svgrepo.com/show/452156/angular.svg", color: "from-red-400 to-red-600" },
    { name: "Node.js", image: "https://www.svgrepo.com/show/303360/nodejs-logo.svg", color: "from-green-400 to-green-600" },
    { name: "Express", image: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png", color: "from-gray-400 to-gray-600" },
    { name: "MySQL", image: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png", color: "from-blue-600 to-blue-800" },
    { name: "PostMan", image: "https://www.svgrepo.com/show/354202/postman-icon.svg ", color: "from-green-500 to-green-700" },
    { name: "github", image: "https://www.svgrepo.com/show/445786/github.svg", color: "from-green-500 to-green-700" },
    { name: "git", image: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/git-13.png", color: "from-green-500 to-green-700" },
    { name: "git", image: "https://www.svgrepo.com/show/452192/docker.svg", color: "from-green-500 to-green-700" },
    { name: "git", image: "https://www.svgrepo.com/show/184143/java.svg", color: "from-green-500 to-green-700" },
  ];

  return (
    <section ref={Skill} className=" flex flex-col justify-center items-center dark:bg-gray-800  px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center  dark:text-white">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="flex flex-col items-center"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            
            <div className="relative w-22 h-24"> 
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={skill.image} className="text-lg font-bold text-gray-800 dark:text-white">
                  
                </img>
              </div>
            </div>
            <p className="mt-4 text-center text-gray-700 dark:text-gray-300 font-semibold">
              
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
