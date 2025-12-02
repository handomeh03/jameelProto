import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { UseGoes } from "../Context/GoContext";

export default function Projectjs() {
  let {Project}=UseGoes();
let [projects] = useState([
  { 
    id: 1, 
    name: "shabab Altageer", 
    short: "Developed platform enabling event registration, participation tracking, and volunteer data management withauthentication and role-based access, built with React, Node.js, Express, and MySQL",
    image: "/shababaltageer.png",
    postion:"left"
  },
  { 
    id: 2, 
    name: "Sprint Lite", 
    short: "Created solution for task tracking and workflow monitoring with interactive interface and analytics dashboard to enhanceteam productivity",
    image: "/sprintLite.png",
    postion:"right"
  },
   { 
    id: 3, 
    name: "GearTrack", 
    short: "Built a system to manage company devices, allowing employees to track who borrowed equipment (e.g., cameras) andreturn dates, with an additional feature for booking meetings with the company.",
    image: "/geartrack.png",
    postion:"left"
  },
   { 
    id: 4, 
    name: "Student Nest", 
   short: "A student accommodation platform featuring room discovery, roommate matching, and blockchain-secured smart rental contracts",
    image: "/studentNest.png",
    postion:"right"
  },
  
]);
    
  return (
    <div ref={Project} className="bg-gray-800" >
      <div className="mx-auto max-w-2xl px-4  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
       <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center  dark:text-white">
        Projects
      </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
  {projects.map((project) => (
    <ProjectCard project={project}/>
  ))}


        </div>
      </div>
    </div>
  );
}