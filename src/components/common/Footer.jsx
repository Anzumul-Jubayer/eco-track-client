import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-green-700 via-green-800 to-emerald-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Eco<span className="text-green-300">Track</span>
            </h2>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
              Empowering communities to live sustainably — one step at a time 🌱
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-200 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-green-300 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-green-300 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-200 mb-3">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-green-600 transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-green-600 transition"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-green-600 transition"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-green-600 transition"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600 my-8"></div>

        <div className="text-center text-sm text-gray-300 space-y-2">
          <p>© 2025 EcoTrack. All rights reserved.</p>
          <p>
            <a href="#" className="hover:text-green-300 mx-2">
              Accessibility
            </a>
            •
            <a href="#" className="hover:text-green-300 mx-2">
              Privacy Policy
            </a>
            •
            <a href="#" className="hover:text-green-300 mx-2">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
