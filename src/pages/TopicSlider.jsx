import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const topics = [
  {
    title: "Developers APIs",
    image: "assets/apis.jpg",
    subTopics: [
      {
        title: "Authentication",
        description: "Secure API access with OAuth2 and JWT tokens.",
      },
      {
        title: "Add Bank Payments Receipt",
        description: "The Comprehensive Dashboard provides an overview of your key account data, including balances, orders, and financial summaries. Access everything you need in one place with an intuitive and user-friendly interface.",
      },
      {
        title: "Orders",
        description: "Seamlessly create new orders via API with real-time data posting. Automate your order processing and reduce manual entry.",
      },
      {
        title: "Invoices",
        description: "Generate, retrieve, and manage invoices through API. Ensure fast, accurate billing and seamless integration with your systems.",
      },
      {
        title: "WReceipts",
        description: "Create and fetch customer receipts via API to keep your records up-to-date and ensure smooth payment tracking.",
      },
      {
        title: "Customer",
        description: "Easily add new customers to your system via API. Automate customer onboarding with accurate and instant data entry.",
      },
      {
        title: "Add Product",
        description: "A sale transaction to a customer can only be recorded when associated with the sale of either a stock or non-stock product.",
      }
    ],
  },
  {
    title: "Customer Portal",
    image: "assets/customer.jpg",
    subTopics: [
      {
        title: "Comprehensive Dashboard",
        description: "The Comprehensive Dashboard provides an overview of your key account data, including balances, orders, and financial summaries",
      },
      {
        title: "Orders",
        description: "View and manage all your orders in one place. Track status, details, and history to stay updated on every transaction.",
      },
      {
        title: "Invoices",
        description: "Easily view and manage all your invoices. Track payment status, download copies, and keep your billing organized in one place.",
      },
      {
        title: "Accounts",
        description: "Connect your bank accounts, automate reconciliations, and track every transaction with complete clarity and control.",
      },
      {
        title: "Payments",
        description: "Stay on top of your payments with clear summaries of amounts paid and outstanding. View payment history and manage dues effortlessly.",
      },
      {
        title: "Statements",
        description: "Access detailed account statements anytime. View transaction history, outstanding balances, and downloadable summaries in one click.",
      }
    ],
  },
  {
    title: "Software Essentials",
    image: "assets/software.jpg",
    subTopics: [
      {
        title: "Sales",
        description: "Track, manage, and boost your sales with real-time insights, invoicing, and performance analytics—all in one place.",
      },
      {
        title: "APurchases",
        description: "Easily manage your supplier bills, track expenses, and control your purchase workflow with accuracy and efficiency.",
      },
      {
        title: "Inventory",
        description: "Stay on top of your stock levels, manage products in real time, and streamline your inventory across locations with ease.",
      },
       {
        title: "Accounts",
        description: "Connect your bank accounts, automate reconciliations, and track every transaction with complete clarity and control.",
      },
      {
        title: "Projects",
        description: "Plan, track, and manage your projects while keeping an eye on budgets, time, and profitability—all in one place.",
      },
      {
        title: "Manufacturing",
        description: "Streamline your production process with real-time tracking of raw materials, work orders, and finished goods—all integrated with your inventory.",
      }
    ],
  },
];

// export default function TopicSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTopic = () => {
//     setCurrentIndex((prev) => (prev + 1) % topics.length);
//   };

//   const prevTopic = () => {
//     setCurrentIndex((prev) => (prev - 1 + topics.length) % topics.length);
//   };

//   const currentTopic = topics[currentIndex];

//   return (
//     <div className="w-full mx-auto mt-10 p-4 relative max-w-7xl">
//       {/* Navigation buttons */}
//       <button
//         onClick={prevTopic}
//         className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full hover:bg-gray-200 shadow-md"
//       >
//         <ChevronLeft size={24} />
//       </button>
//       <button
//         onClick={nextTopic}
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full hover:bg-gray-200 shadow-md"
//       >
//         <ChevronRight size={24} />
//       </button>

//       {/* Content layout */}
//       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
//         {/* Left image */}
//         <div className="w-full lg:w-2/5 flex justify-center">
//           <img
//             src={currentTopic.image}
//             alt={currentTopic.title}
//             className="rounded-lg w-full max-w-sm object-contain"
//           />
//         </div>

//         {/* Right subtopics */}
//         <div className="w-full lg:w-3/5">
//           <h2 className="text-2xl lg:text-3xl font-bold mb-6">
//             {currentTopic.title}
//           </h2>
//           <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
//             {currentTopic.subTopics.map((sub, index) => (
//               <li
//                 key={index}
//                 className="border-l-4 border-green-400 pl-4 bg-white rounded shadow-sm hover:shadow-md transition"
//               >
//                 <h3 className="text-lg font-semibold">{sub.title}</h3>
//                 <p className="text-gray-600 text-sm sm:text-base">
//                   {sub.description}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function TopicSlider() {
  const wrapperRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    // Pin only when section is slightly scrolled into view
    ScrollTrigger.create({
      trigger: wrapper,
      start: "top 30%", // thoda neeche aane ke baad start
      end: () => `+=${wrapper.scrollHeight - window.innerHeight}`,
      pin: true,
      pinSpacing: false,
    });

    // Image fade-in animation
    imageRefs.current.forEach((img) => {
      gsap.fromTo(
        img.current,
        { autoAlpha: 0, y: 30 ,opacity: 0,duration: 0.8 },
        {
          // autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative w-full h-screen"
    >
      {/* Inner scrollable content */}
      <div
        className="h-full overflow-y-auto scroll-smooth px-6 md:px-12 py-14 space-y-28
                   scrollbar-hide" // custom utility to hide scrollbar
      >
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-10 items-start justify-center"
          >
            {/* Image */}
            <div className="lg:w-2/5 w-full flex justify-center">
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={topic.image}
                alt={topic.title}
                className="rounded-2xl w-full max-w-sm object-contain shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="lg:w-3/5 w-full">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                {topic.title}
              </h2>
              <ul className="space-y-6">
                {topic.subTopics.map((sub, i) => (
                  <li
                    key={i}
                    className="border-l-2 border-green-500 pl-5"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {sub.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {sub.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CSS to hide scrollbar */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
      `}</style>
    </section>
  );
}
