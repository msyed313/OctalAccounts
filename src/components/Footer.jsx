import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f3846] text-white px-6 sm:px-10 lg:px-16 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 lg:gap-16">
        
        {/* Left Section */}
        <div className="md:flex-1 md:max-w-sm">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-snug">
            Let’s make something <br className="hidden sm:block" /> great together!
          </h2>
          <button
            type="button"
            className="inline-flex items-center bg-white text-[#0f3846] rounded-full px-6 py-2.5 font-medium hover:bg-gray-100 transition"
          >
            Signup Now
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          {/* Links */}
          <nav className="mt-8 space-y-2 text-sm">
            <a href="#" className="text-[#2AB96A] hover:underline inline-block">
              Home
            </a>
            <a href="#" className="block hover:underline font-semibold">
              Privacy Policy
            </a>
            <a href="#" className="block hover:underline font-semibold">
              Terms &amp; Conditions
            </a>
            <a href="#" className="block hover:underline font-semibold">
              Refund and Cancellation Policy
            </a>
          </nav>
        </div>

        {/* Center Contact Info */}
        <div className="md:flex-1 md:max-w-xs">
          <h3 className="text-xl font-semibold mb-4 text-gray-400">Let&apos;s Talk</h3>
          <p className="font-semibold text-white mb-2">info@octalaccounts.com</p>
          <p className="font-semibold text-white">+(92) 42 3788 38 37</p>
        </div>

        {/* Right Contact Form */}
        <form className="md:flex-1 w-full max-w-lg">
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "phone", label: "Phone", type: "tel" },
              { id: "subject", label: "Subject", type: "text" },
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-bold mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  placeholder={label}
                  className="w-full rounded-md bg-gray-300 text-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            ))}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-bold mb-1">
              Detail
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Message"
              className="w-full rounded-md bg-gray-300 text-gray-700 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2.5 font-medium transition"
          >
            Submit
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        Octal Accounts | © 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
