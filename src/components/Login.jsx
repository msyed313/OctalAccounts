import React from "react";

const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/loginvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

      {/* Main Container */}
      <div className="relative flex z-10 w-full sm:max-w-md md:max-w-5xl mx-4 sm:mx-6 lg:mx-12 flex-col md:flex-row bg-transparent rounded-2xl overflow-hidden shadow-lg">
        
        {/* Left Text Panel (Hidden on small screens) */}
        <div className="hidden md:flex md:flex-1 bg-black bg-opacity-60 p-10 text-white">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
              Octal <span className="text-teal-500">Accounts</span>
            </h1>
            <p className="text-lg mb-6 font-semibold">
              The Ultimate Accounting Solution:
            </p>
            <p className="text-base leading-relaxed">
              Streamlined Features to simplify your financial management.
              Effortlessly track, manage, and analyze your accounts with
              precision. Stay on top of your finances with real-time insights,
              automated processes, and secure data management, ensuring
              accuracy and peace of mind.
            </p>
          </div>
        </div>

        {/* Right Login Form */}
        <div className="md:flex-1 bg-white p-8 rounded-2xl md:rounded-none md:rounded-r-2xl">
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 text-gray-700 font-medium"
              >
                User Name
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-1 text-gray-700 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-semibold py-2 rounded shadow transition"
            >
              Login
            </button>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-400 font-medium">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full border border-gray-300 rounded flex items-center justify-center gap-2 py-2 text-teal-600 font-medium hover:bg-teal-50 transition"
            >
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/80f387f6-6f82-4ed5-ab6a-dd5cf7bdbed1.png"
                alt="Google"
                className="w-5 h-5"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              Login with Google
            </button>

            <div className="mt-6 flex justify-center text-teal-600 font-medium text-sm gap-6">
              <button type="button" className="hover:underline">
                Sign Up Now
              </button>
              <span className="border-l border-teal-600 px-2"></span>
              <button type="button" className="hover:underline">
                Forgot password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
