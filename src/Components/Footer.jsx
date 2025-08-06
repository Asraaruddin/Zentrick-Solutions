import React from "react";
import { Zap } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F2933] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div
              className="rounded-[8px] shadow-lg flex items-center justify-center"
              style={{
                width: 48,
                height: 48,
                padding: 8,
                background: "linear-gradient(180deg, #008DF4 0%, #01A6FB 100%)",
                boxShadow: "0px 4px 4px 0px #0000001A",
              }}
            >
              <Zap color="#fff" size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-xl font-bold text-white">Zentrix Solutions</h2>
          </div>
          <p className="text-sm text-gray-300">
            Empowering businesses through innovative IT solutions. We deliver cutting-edge technology
            services that drive growth and efficiency.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
              <FaTwitter size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
              <FaFacebook size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition">Cyber Security</a></li>
            <li><a href="#" className="hover:text-white transition">Web Development</a></li>
            <li><a href="#" className="hover:text-white transition">Custom Development</a></li>
            <li><a href="#" className="hover:text-white transition">Data Analytics</a></li>
            <li><a href="#" className="hover:text-white transition">Cloud Computing</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📧 info@zentrixsolutions.com</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>🏢 123 Tech Street, Digital City, TC 12345</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2024 Zentrix Solutions. All rights reserved. |
        <a href="#" className="mx-2 hover:text-white transition">Privacy Policy</a> |
        <a href="#" className="ml-2 hover:text-white transition">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
