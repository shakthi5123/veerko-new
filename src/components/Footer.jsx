import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#191a0b] text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ml-20">
        {/* name and about  */}
        <div data-aos="fade-right">
          <h2 className="text-2xl font-bold mb-4">Veerko</h2>
          <p className="text-sm text-gray-300">
            Veerko is your perfect gifting partner for premium corporate and
            festive gifting. Explore our wide range of curated gifts tailored to
            every occasion.
          </p>
        </div>

        {/* quicks links  */}
        <div data-aos="fade-right">
          <h3 className="text-xl font-semibold mb-3 ">Quick links</h3>
          <ul className="space-y-2 text-gray-300 text-md">
            <li>
              <NavLink to="/" className="hover:text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-white">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/occasion" className="hover:text-white">
                Occasion
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div data-aos="fade-left">
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-md">
            <li>
              Email:{" "}
              <a
                href="mailto:info.veerko@gmail.com"
                className="hover:text-white"
              >
                info.veerko@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+91XXXXXXXXXX" className="hover:text-white">
                +91 8425937790
              </a>
            </li>
            <li>Location: Mumbai, India</li>
          </ul>
        </div>

        {/* Social Media  */}
        <div data-aos="fade-left">
          <h3 className="text-xl font-semibold mb-4">Follow Us!</h3>
          <ul className="space-y-2  text-gray-300 text-2xl flex gap-3">
            <li>
              <a
                href="https://wa.me/8425937790"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              ><FaWhatsapp /></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/veerko_official"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              ><FaInstagram /></a>
            </li>

          </ul>
        </div>
      </div>

      {/* bottom-bar  */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-white-900 text-sm">
            Copyright © {new Date().getFullYear()} All Rights Reserved to <NavLink to="/">Veerko</NavLink>.
      </div>
    </footer>
  );
};

export default Footer;
