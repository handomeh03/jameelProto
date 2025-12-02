
import "../Css/Upbutton.css";
import { UseGoes } from "../Context/GoContext";

export default function Upbutton() {
    let {Home}=UseGoes();
    function GoHome(){
        Home.current.scrollIntoView({behavior:"smooth"});
    }
  return (
    
<button onClick={GoHome} class="button">
  <svg
    class="svg"
    xmlns="http://www.w3.org/2000/svg"
    height="25px"
    viewBox="0 -960 960 960"
    width="25px"
    fill="#1976d2"
  >
    <path
      d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"
    ></path>
  </svg>
</button>

  );
}
