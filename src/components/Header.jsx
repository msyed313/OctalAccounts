import { useState, useRef } from "react";
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
    <header className=" bg-[#9D256B] text-white py-4 px-6 flex items-center justify-between fixed  top-5 left-5 right-5 z-50 shadow-lg">

      {/* Logo */}
      <div className="font-bold flex items-center">
        <p className="text-purple-600 text-3xl">Octal<span className="text-green-400">Accounts</span></p>
      </div>

      {/* Buttons */}
      <div className="px-4 gap-10 flex justify-around">
        {/* Menu Card */}

        <nav ref={menuRef} className={`absolute flex gap-5 text-white p-2  right-36`}>
          <NavLink to="/home" className="text-white font-semibold text-lg">Home</NavLink>
          <NavLink to="/about" className="text-white font-semibold text-lg">About</NavLink>
          <NavLink to="/about" className="text-white font-semibold text-lg">FBR Digital Invoicing</NavLink>
          <div
            className="group relative"

          >
            <NavLink
              // to="/services"
              className="text-white font-semibold text-xl"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(true)}
            >
              Features
            </NavLink>


          </div>


          <NavLink  className="text-white font-semibold text-lg">Support</NavLink>
          

        </nav>
        <button ref={menuIconRef} onClick={openMenu} className="hover:cursor-pointer">
          {
            isOpen ? <X size={35} /> : <Menu size={35} />
          }
        </button>
        <button ref={buttonRef} className={` bg-white text-[#9D256B] px-4 py-2 rounded-lg font-semibold`}>
          Login
        </button>

      </div>
      {/* Full-width dropdown inside header */}
      <div
        className={`${servicesOpen? "flex" : "hidden"} mx-auto max-w-6xl absolute left-0 right-0 top-20 bg-white shadow-md transition-all duration-300 z-50 
                }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <NavLink onClick={() => setServicesOpen(false)} key={index} className="flex items-center space-x-4 mx-auto">
              {feature.icon}
              <div>
                <h3 className="font-semibold text-gray-800 text-xl">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
