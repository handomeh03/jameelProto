
import { UseGoes } from "../Context/GoContext";

export default function Navbar({flag,setFlag}) {
  

  const links = ["Home", "Projects", "Skills", "Contact"];
    let {Project}=UseGoes();
    let {Skill}=UseGoes();
    let {Contact}=UseGoes();

  function GoLink(link) {
    if (link === "Projects") Project.current.scrollIntoView({ behavior: "smooth" });
    else if (link === "Skills") Skill.current.scrollIntoView({ behavior: "smooth" });
    else if (link === "Contact") Contact.current.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    setFlag(false);
  }
 return (
    <>
      {/* Desktop Navbar */}
      <nav className="items-center hidden text-lg text-white uppercase font-sen lg:flex">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => GoLink(link)}
            className="flex px-6 py-2 hover:text-gray-500 hover:cursor-pointer"
          >
            {link}
          </button>
        ))}
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          flag ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setFlag(false)}
      ></div>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-20 right-0 w-48 bg-gray-800 rounded-md shadow-lg z-50 transform transition-transform duration-300 ${
          flag ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((link) => (
          <button
            key={link}
            onClick={() => GoLink(link)}
            className="block px-4 py-3 text-white hover:bg-gray-700 hover:cursor-pointer transition-colors duration-300 w-full text-left"
          >
            {link}
          </button>
        ))}
      </div>
    </>
  );
}
