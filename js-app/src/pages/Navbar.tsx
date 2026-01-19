import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes"; // adjust path if needed

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="absolute top-20 left-1/2 -translate-x-1/2 z-20 w-full">
      <nav className="flex justify-center items-center">
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

          <li
            className="cursor-pointer hover:text-cyan-400 transition"
            onClick={() => navigate(ROUTES.DASHBOARD)}
          >
            Services
          </li>

          <li
            className="cursor-pointer hover:text-cyan-400 transition"
            onClick={() => navigate(ROUTES.DASHBOARD)}
          >
            Projects
          </li>

          <li
            className="cursor-pointer hover:text-cyan-400 transition"
            onClick={() => navigate(ROUTES.DASHBOARD)}
          >
            Contact Us
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
