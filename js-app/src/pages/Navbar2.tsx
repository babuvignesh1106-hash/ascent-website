import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { ROUTES } from "../constants";

function Navbar2() {
  const navigate = useNavigate();

  return (
    <div className="w-[1920px] h-[103px] bg-gradient-to-r from-[#002C53] to-[#0C4F6E] flex items-center justify-between px-60">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-[60px] cursor-pointer" />

      {/* Menu */}
      <ul className="flex gap-16 text-[20px] font-medium text-white">
        <li
          className="cursor-pointer hover:text-cyan-400 transition"
          onClick={() => navigate(ROUTES.DASHBOARD)}
        >
          Home
        </li>

        <li
          className="cursor-pointer hover:text-cyan-400 transition"
          onClick={() => navigate(ROUTES.DASHBOARD2)}
        >
          About Us
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          Services
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          Projects
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          Contact Us
        </li>
      </ul>
    </div>
  );
}

export default Navbar2;
