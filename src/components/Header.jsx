import { useState, useRef, useEffect } from "react";
import {
  X, Menu, DollarSign,
  ShoppingCart,
  Package,
  Settings,
  ClipboardList,
  Calculator,
  Globe,
  BarChart2,
  Users,
  Database,
  Share2,
} from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobilefeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef();
  const menuRef = useRef();
  const menuIconRef = useRef();
  const buttonRef = useRef();

  // Scroll hide/show logic
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY && window.scrollY > 50) {
            // Scroll down → hide
            gsap.to(headerRef.current, {
              y: "-150%",
              duration: 0.7,
              ease: "power2.out",
            });
          } else {
            // Scroll up → show
            gsap.to(headerRef.current, {
              y: "0%",
              duration: 0.7,
              ease: "power2.out",
            });
          }
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  const features = [
    {
      icon: <DollarSign size={40} className="text-green-500" />,
      title: "Sales Management",
      desc: "Streamline your selling process",
    },
    {
      icon: <ShoppingCart size={40} className="text-green-500" />,
      title: "Purchases & Expense",
      desc: "Simplify expense tracking workflows",
    },
    {
      icon: <Package size={40} className="text-green-500" />,
      title: "Inventory & Stock Control",
      desc: "Monitor stock with accuracy",
    },
    {
      icon: <Settings size={40} className="text-green-500" />,
      title: "Manufacturing & Assembly",
      desc: "Streamline your production process",
    },
    {
      icon: <ClipboardList size={40} className="text-green-500" />,
      title: "Batch Tracking",
      desc: "Manage expiry and batches",
    },
    {
      icon: <Calculator size={40} className="text-green-500" />,
      title: "Tax Automation",
      desc: "Effortless tax automation",
    },
    {
      icon: <Globe size={40} className="text-green-500" />,
      title: "Multi-Currency Accounting",
      desc: "Track multiple currencies accurately",
    },
    {
      icon: <BarChart2 size={40} className="text-green-500" />,
      title: "Business Insights",
      desc: "400+ reports, fully organized",
    },
    {
      icon: <Users size={40} className="text-green-500" />,
      title: "User Access Control",
      desc: "Flexible permission-based control",
    },
    {
      icon: <Database size={40} className="text-green-500" />,
      title: "Data Security & Backup",
      desc: "Automatic backup and recovery",
    },
    {
      icon: <Share2 size={40} className="text-green-500" />,
      title: "Seamless Integration",
      desc: "Digital Invoicing, Shopify Integration",
    },
  ];

  return (
    <header ref={headerRef} className=" fixed bg-gray-100 py-4 px-6 flex items-center justify-between top-5 left-5 right-5 z-50 shadow-lg rounded-3xl h-16">

      {/* Logo */}
      <div className="font-bold flex items-center">
        <p className="text-purple-600 text-3xl">Octal<span className="text-green-400">Accounts</span></p>
      </div>

      {/* Buttons */}
      <div className="px-4 gap-10 flex justify-around">
        {/* Menu Card */}

        <nav ref={menuRef} className={`absolute flex gap-5 text-white p-2  right-36`}>
          <NavLink to="/home" className="text-black font-semibold text-lg">Home</NavLink>
          <NavLink to="/about" className="text-black font-semibold text-lg">About</NavLink>
          <NavLink to="/fbr" className="text-black font-semibold text-lg">FBR Digital Invoicing</NavLink>
          <div
            className="group relative"

          >
            <NavLink
              // to="/services"
              className="text-black font-semibold text-xl"
              aria-expanded={featuresOpen}
              onClick={() => setFeaturesOpen(true)}
            >
              Features
            </NavLink>


          </div>


          <NavLink className="text-black font-semibold text-lg">Support</NavLink>


        </nav>
        <button ref={menuIconRef}
          onClick={() => {
            if (window.innerWidth >= 768) {
              openMenu(); // Large screen ka logic
            } else {
              setMenuOpen(!menuOpen); // Mobile ka logic
            }
          }}
          className="hover:cursor-pointer">
          {
            isOpen || menuOpen ? <X size={35} /> : <Menu size={35} />
          }
        </button>
        <NavLink to="/login" ref={buttonRef} className={`md:block hidden bg-[#9D256B] text-white px-4 py-2 rounded-lg font-semibold`}>
          Login
        </NavLink>

      </div>
      {/* Full-width dropdown inside header */}
      <div
        className={`${featuresOpen ? "flex" : "hidden"} mx-auto max-w-6xl absolute left-0 right-0 top-20 bg-white shadow-md transition-all duration-300 z-50 
                }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <NavLink onClick={() => setFeaturesOpen(false)} key={index} className="flex items-center space-x-4 mx-auto">
              {feature.icon}
              <div>
                <h3 className="font-semibold text-gray-800 text-xl">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            </NavLink>
          ))}
        </div>

      </div>

    
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute md:hidden bg-white shadow-md py-4 left-0 right-0 max-h-[80vh] overflow-y-auto z-50 top-full rounded-2xl">
          <nav className="flex flex-col px-6 space-y-4">
            <NavLink className="text-lg font-semibold" to="/home" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink className="text-lg font-semibold" to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
            <NavLink className="text-lg font-semibold" to="/about" onClick={() => setMenuOpen(false)}>FBR Digital Invoicing</NavLink>
            <p
              className="text-lg font-semibold hover:cursor-pointer"
              onClick={() => setMobileFeaturesOpen(!mobilefeaturesOpen)}
            >
              Features
            </p>

            {/* Features Dropdown inside Mobile Menu */}
            <div className={mobilefeaturesOpen ? "flex flex-col mt-2 ml-6 p-2" : "hidden"}>
              <NavLink to="/revenue-cycle" onClick={() => setMenuOpen(false)} className="block px-4 py-2 font-semibold">Sales Management</NavLink>
              <NavLink to="/credentialing" onClick={() => setMenuOpen(false)} className="block px-4 py-2 font-semibold">Purchases & Expense</NavLink>
              <NavLink to="/medical-coding" onClick={() => setMenuOpen(false)} className="block px-4 py-2 font-semibold">Inventory & Stock Control</NavLink>
              <NavLink to="/billing-services" onClick={() => setMenuOpen(false)} className="block px-4 py-2 font-semibold">Manufacturing & Assembly</NavLink>
              <NavLink to="/compliance-report" onClick={() => setMenuOpen(false)} className="block px-4 py-2 font-semibold">Batch Tracking</NavLink>
              <NavLink to="/dental-service" onClick={() => setMenuOpen(false)} className="block px-4 py-2 font-semibold">Multi-Currency Accounting </NavLink>
              <NavLink to="/revenue-cycle" onClick={() => setMenuOpen(false)} className="block px-4 py-2 font-semibold">Business Insights</NavLink>
              <NavLink to="/credentialing" onClick={() => setMenuOpen(false)} className="block px-4 py-2 font-semibold">User Access Control</NavLink>
              <NavLink to="/medical-coding" onClick={() => setMenuOpen(false)} className="block px-4 py-2 font-semibold">Data Security & Backup</NavLink>
              <NavLink to="/billing-services" onClick={() => setMenuOpen(false)} className="block px-4 py-2 font-semibold">Seamless Integration</NavLink>
            </div>

            <NavLink className="text-lg font-semibold" to="/about" onClick={() => setMenuOpen(false)}>Support</NavLink>
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              <button className="bg-[#9D256B] text-lg font-semibold text-white px-4 py-2 rounded-md ">
                Login
              </button>
            </NavLink>
          </nav>
        </div>
      )}


    </header>
  );
};

export default Header;
