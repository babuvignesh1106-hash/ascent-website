import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

import imag from "../../assets/footer logo.svg";
import image from "../../assets/Ascentware One Line Logo 5.svg";

function Footer() {
  return (
    <footer className="w-full overflow-hidden">
      {/* Top CTA Bar */}
      <div className=" relative bg-[#00A6E3] h-[177px] flex items-center justify-center">
        <div className="max-w-[1920px] w-full px-8 flex items-center justify-between">
          <h2 className="text-white text-[70px] pl-90 font-bold">
            Let’s Get Started !
          </h2>
        </div>
        <div className=" absolute top-[80px] left-[1500px] flex items-center gap-2 bg-white text-[#00A6E3] px-6 py-3 w-[215px] h-[58px]  rounded-full font-semibold shadow">
          <span className="rounded-full border-2 border-[#00A6E3] w-[100px] flex items-center justify-center">
            C
          </span>
          Let’s talk Now
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative bg-gradient-to-r from-[#002C53] to-[#0C4F6E] h-[521px]">
        <div className="relative max-w-[1920px] mx-auto h-full text-white">
          {/* Brand */}
          <div className="absolute left-[400px] top-[80px] w-[420px]">
            <img
              className="w-[400px] h-[60px] mb-4"
              src={imag}
              alt="Ascentware Logo"
            />

            <p className="text-[18px] leading-relaxed">
              Building better futures by delivering smart, scalable, and
              innovative solutions to individuals and organizations worldwide.
            </p>

            <div className="mt-6">
              <p className="font-semibold mb-3 text-[24px]">Follow Us</p>
              <div className="flex gap-4">
                <Facebook size={28} />
                <Instagram size={28} />
                <Twitter size={28} />
                <Linkedin size={28} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[1000px] top-[90px] text-white">
          <h4 className="font-semibold mb-5 text-[24px]">Quick Link</h4>
          <ul className="space-y-3 text-[18px]">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="absolute left-[1550px] top-[90px] w-[420px] text-white">
          <h4 className="font-semibold mb-5 text-[24px]">Contact US</h4>
          <ul className="space-y-4 text-[18px] opacity-90">
            <li className="flex gap-3 items-start">
              <Phone size={18} /> +91 7305564241
            </li>
            <li className="flex gap-3 items-start">
              <Mail size={18} /> inf@ascentware.in
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={18} />
              No.184, Periyar Pathai,
              <br />
              Choolaimedu, Chennai,
              <br />
              Tamil Nadu - 600094
            </li>
          </ul>
        </div>

        <div className="absolute left-[1250px] top-[90px] text-white">
          <h4 className="font-semibold mb-5 text-[24px]">Services</h4>
          <ul className="space-y-3 text-[18px] opacity-90">
            <li>Managed IT Services</li>
            <li>Cybersecurity Solutions</li>
            <li>IT Consulting</li>
            <li>Digital Transformation</li>
            <li>Cloud Solutions</li>
            <li>HR Services</li>
          </ul>
        </div>
        <img
          className="absolute top-[80px] left-[399px] w-[74px] h-[67px"
          src={image}
          alt="Ascentware Logo"
        />
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00A6E3] h-[56px] flex items-center justify-center">
        <p className="text-white text-[20px]">
          © 2025 Ascentware Corporation.{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
