import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">CREATENARY</h2>
        </div>
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Createnary
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Refund
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Newsletter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy & Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Contacts</h3>
          <ul className="space-y-2">
            <li>Delhi, India</li>
            <li>+91 98765 43210</li>
            <li>+91 99999 99999</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
