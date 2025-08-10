import { useState, useRef } from "react";
import { X, Menu } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef();
  const menuIconRef = useRef();
  const buttonRef = useRef();
  const handleMouseEnter = () => {
    setTimeout(() => {
      setServicesOpen(true);
    }, 200); // 200ms ka delay
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setServicesOpen(false);
    }, 200); // 200ms ka delay
  };

  // Handle menu toggle
  const openMenu = () => {
    setIsOpen(!isOpen);

  };


  // GSAP Animation for Menu Card
  useGSAP(() => {
    if (isOpen) {
      // Open Menu Animation
      gsap.to(
        menuRef.current,
        { opacity: 1, duration: 1, y: 0 }
      );
      // Rotate Menu Button
      gsap.to(menuIconRef.current, { duration: 1, x: 130 });
      //Button Animation
      gsap.to(buttonRef.current, { opacity: 0, duration: 0.2, y: -50 })
    } else {
      // Close Menu Animation
      gsap.to(menuRef.current, { opacity: 0, duration: 0, y: -50 });
      // Reset Menu Button Rotation
      gsap.to(menuIconRef.current, { rotate: 0, duration: 1, x: 0 });
      //Button Animation
      gsap.to(buttonRef.current, { opacity: 1, duration: 1, y: 0 })
    }
  }, [isOpen]);
  return (
    <header className="bg-[#9D256B] text-white py-4 px-6 flex items-center justify-between">

      {/* Logo */}
      <div className="text-2xl font-bold flex items-center">
        <img src="/assets/wolf.png" alt="Zingo Logo" className="h-14" />
      </div>

      {/* Buttons */}
      <div className="px-4 gap-10 flex justify-around">
        {/* Menu Card */}

        <nav ref={menuRef} className={`absolute flex gap-5 text-white p-2 text-lg right-36`}>
          <NavLink to="/home" className="text-white font-semibold text-xl">Home</NavLink>
          <NavLink to="/about" className="text-white font-semibold text-xl">About</NavLink>
          <div
            className="relative group"
            onMouseEnter={()=>setServicesOpen(true)}
            onMouseLeave={()=>setServicesOpen(false)}
          >
            <NavLink
              to="/services"
              className="text-white font-semibold text-xl"
              aria-expanded={servicesOpen}

            >
              Services
            </NavLink>
            {/* Services Dropdown */}
            <div
              className={`absolute left-0 mt-7 w-64 bg-[#9D256B] shadow-lg rounded-md p-2 transition-all duration-300 transform origin-top 
            ${servicesOpen ? "opacity-100 scale-y-100 " : "opacity-0 scale-y-0"}`}
            >
              <NavLink
                to="/revenue-cycle"
                className="block px-4 py-2 text-lg font-semibold  rounded-md"
              >
                Revenue Cycle Management
              </NavLink>
              <NavLink
                to="/credentialing"
                className="block px-4 py-2 text-lg font-semibold  rounded-md"
              >
                Credentialing
              </NavLink>
              <NavLink
                to="/medical-coding"
                className="block px-4 py-2 text-lg font-semibold  rounded-md"
              >
                Medical Coding
              </NavLink>
              <NavLink
                to="/billing-services"
                className="block px-4 py-2 text-lg font-semibold  rounded-md"
              >
                Billing & Follow-Up Services
              </NavLink>
              <NavLink
                to="/compliance-report"
                className="block px-4 py-2 text-lg font-semibold rounded-md"
              >
                Compliance and Reporting
              </NavLink>
              <NavLink
                to="/dental-service"
                className="block px-4 py-2 text-lg font-semibold  rounded-md"
              >
                Dental
              </NavLink>
            </div>

          </div>

          <NavLink to="/about" className="text-white font-semibold text-xl">Blog</NavLink>
          <NavLink to="/about" className="text-white font-semibold text-xl">Contact</NavLink>

        </nav>
        <button ref={menuIconRef} onClick={openMenu} className="hover:cursor-pointer">
          {
            isOpen ? <X size={35} /> : <Menu size={35} />
          }
        </button>
        <button ref={buttonRef} className={` bg-white text-[#9D256B] px-4 py-2 rounded-lg font-semibold`}>
          GET STARTED
        </button>

      </div>

    </header>
  );
};

export default Header;
