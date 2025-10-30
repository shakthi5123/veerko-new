import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="shadow-md bg-white fixed top-0 left-0 z-50 w-full  ">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-1 border-b border-[#eaecef] max-w-8xl mx-auto px-12 md:px-12">
        {/* logo */}
        <Link to="/" className="">
          <img src={logo} alt="Veerko Logo" className="h-25 w-auto " />
        </Link>
        {/* Download Button + Email */}
        <div className="items-centre gap-5 hidden md:flex ">
          <a
            href="https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW"
            className="inline-block bg-white text-blue-600 border border-blue-600 font-semibold px-4 py-2 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
          >
            View Catalogue
          </a>
          <a
            href="mailto:info.veerko@gamil.com"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <FaEnvelope className="mr-2" />
            info.veerko@gamil.com
          </a>
        </div>

        {/* Hamburger Menu  */}
        <button className="md:hidden text-2xl text-gray-700" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Bottom Navigation Menu */}

      {/* <nav className="flex items-center bg-[#EAF3FC] py-4 max-w-8xl mx-auto px-12 border-b border-[#eaecef]" > */}
      <nav className={`md:flex bg-[#EAF3FC] py-4 md:py-4 max-w-8xl mx-auto px-4 md:px-12 border-b border-[#eaecef] transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
        
        <ul className="flex flex-col md:flex-row  gap-6 text-center text-[#191A0C] text-lg md:text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </li>
          {/* <li><NavLink to='/occasion' className={({isActive}) => isActive ? 'text-blue-600' : 'hover:text-blue-600'}>Occasion</NavLink></li> */}
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Our Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/umbrella"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Umbrella
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>


 

  );
};

export default Navbar;


