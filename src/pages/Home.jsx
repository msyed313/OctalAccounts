import React from 'react'
import { Check } from 'lucide-react'
function Home() {
  return (
    <div className="bg-[#f9f9fc] min-h-screen flex flex-col justify-center px-6 md:px-16 py-10">
      <main className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <button className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Let's Go
          </button>
          <p className="text-gray-500 text-sm">Next-Level Billing</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Digital <span className="underline decoration-green-300">Invoicing</span> <br />
            For Every <span className="underline decoration-green-300">Business</span>
          </h1>

          <div className="flex items-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <Check className="text-green-500" />
              <span>Free Trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="text-green-500" />
              <span>24/7 Support</span>
            </div>
          </div>

          <button className="bg-[#0d1b2a] text-white px-6 py-3 rounded-full mt-6 font-semibold">
            Signup Now →
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <img
            src="/hero-dashboard.png"
            alt="Dashboard"
            className="rounded-lg shadow-lg"
          />
          <img
            src="/digital-card.png"
            alt="Digital"
            className="absolute top-10 left-10 w-28 md:w-40 shadow-lg"
          />
          <img
            src="/pos-card.png"
            alt="POS"
            className="absolute bottom-10 right-10 w-28 md:w-40 shadow-lg"
          />
        </div>
      </main>
    </div>
  )
}

export default Home