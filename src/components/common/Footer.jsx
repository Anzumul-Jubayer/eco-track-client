import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Twitter icon from react-icons/fa6

const Footer = () => {
  return (
    <footer className="bg-[#0a111f] text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Eco<span className="text-green-400">Track</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Empowering communities to live sustainably — one step at a time
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-3">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-green-400 transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-green-400 transition"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-green-400 transition"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-green-400 transition"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400 space-y-2">
          <p>© 2026 EcoTrack. All rights reserved.</p>
          <p>
            <a href="/accessibility" className="hover:text-green-400 mx-2">
              Accessibility
            </a>
            •
            <a href="/privacy" className="hover:text-green-400 mx-2">
              Privacy Policy
            </a>
            •
            <a href="/terms" className="hover:text-green-400 mx-2">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
