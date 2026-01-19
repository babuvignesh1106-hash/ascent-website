import { motion } from "framer-motion";
import dashboardImg from "../assets/asc bg.svg";
import logoImg from "../assets/asc logo.svg";

function MainContent() {
  return (
    <div className="relative w-[1920px] h-[1030px] overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={dashboardImg}
        alt="Dashboard Background"
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Center Logo */}
      <motion.img
        src={logoImg}
        alt="Logo"
        className="absolute w-[631px] h-[588px] top-[196px] left-[645px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0], // subtle floating
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1, ease: "easeOut" },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
}

export default MainContent;
