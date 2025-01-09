import logo from "../assets/Ck .png";
import { FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiLinktreeLogo } from "react-icons/pi";
import { BsYoutube } from "react-icons/bs";
const Navbar = () => {
  return (

<nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-9" src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-3xl text-white">
  <a href="https://www.linkedin.com/in/chandu-korubilli-50597918b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
    <FaLinkedin />
  </a>
  <a href="https://linktr.ee/Chandu_korubilli" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
    <PiLinktreeLogo />
  </a>
  <a href="https://github.com/Chandu1706" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
    <FaGithub />
  </a>
  <a href="https://www.instagram.com/chandu_korubilli17/?igsh=MXR5N2E4eGdrNmNpaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
    <FaInstagram />
  </a>
  <a href="https://www.youtube.com/@ChanduKorubilli" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
    <  BsYoutube/>
  </a>
</div>

</nav>
  );
};
export default Navbar
