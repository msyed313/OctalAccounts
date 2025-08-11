import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImpactNumbers = () => {
  const [counts, setCounts] = useState({
    businesses: 0,
    currency: 0,
    transactions: 0,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const animateCount = (key, target, duration = 2000) => {
      let start = 0;
      const incrementTime = 30;
      const increments = Math.ceil(duration / incrementTime);
      const incrementValue = Math.ceil(target / increments);

      const counter = setInterval(() => {
        start += incrementValue;
        if (start >= target) {
          start = target;
          clearInterval(counter);
        }
        setCounts((prev) => ({ ...prev, [key]: start }));
      }, incrementTime);
    };

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 90%",
      end: "bottom 90%",
      toggleActions: "play none none reverse",
      // markers: true,
      onEnter: () => {
        animateCount("businesses", 25);
        animateCount("currency", 148);
        animateCount("transactions", 95);
      },
      onEnterBack: () => {
        animateCount("businesses", 25);
        animateCount("currency", 148);
        animateCount("transactions", 95);
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0A2D37] w-full text-white px-5 md:px-16 py-16 md:py-24 mt-5"
    >
      <div>
        <span className="inline-block bg-[#10B981] text-[#064E3B] font-semibold text-sm md:text-base rounded-full px-4 py-1 tracking-wide mb-10">
          Impact Numbers
        </span>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
        <div>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-900 font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none select-none">
            {counts.businesses.toLocaleString()}K+
          </span>
          <h3 className="mt-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Businesses Served
          </h3>
          <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-md">
            Trusted by over 25,000 businesses across various industries, Octal
            Accounts delivers reliable, efficient, and easy-to-use accounting
            solutions tailored to meet the needs of growing companies.
          </p>
        </div>

        <div>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-900 font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none select-none">
            {counts.currency.toLocaleString()}+
          </span>
          <h3 className="mt-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Currency Supported
          </h3>
          <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-md">
            Octal Accounts supports over 148 global currencies, enabling
            seamless international transactions, multi-currency reporting, and
            accurate conversions—perfect for businesses operating across
            borders.
          </p>
        </div>

        <div>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-900 font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none select-none">
            {counts.transactions.toLocaleString()}M+
          </span>
          <h3 className="mt-4 font-bold text-xl sm:text-2xl md:text-3xl">
            Transactions Processed
          </h3>
          <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-md">
            With over $95 million in transactions processed, Octal Accounts has
            proven its reliability and scalability for businesses of all sizes.
            Our secure platform ensures smooth, accurate, and real-time
            financial reports.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
