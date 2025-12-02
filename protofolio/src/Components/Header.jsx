import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  let[flag,setFlag]=useState(false);
  return (
    <header className="z-30 flex items-center w-full h-20 sm:h-28 bg-transparent">
      <div className="container flex items-center justify-between px-4 sm:px-6 mx-auto">
        
        {/* Logo / Name */}
        <div className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
          Jameel Handomeh
        </div>

        {/* Navigation + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Navbar flag={flag} setFlag={setFlag} />

          {/* Mobile Menu Button */}
          <button onClick={()=>{setFlag((old)=>!old)}} className="flex flex-col space-y-1 lg:hidden group">
            <span className="w-6 h-1 bg-white rounded-sm transition-all group-hover:bg-pink-400"></span>
            <span className="w-6 h-1 bg-white rounded-sm transition-all group-hover:bg-pink-400"></span>
            <span className="w-6 h-1 bg-white rounded-sm transition-all group-hover:bg-pink-400"></span>
          </button>
        </div>

      </div>
    </header>
  );
}
