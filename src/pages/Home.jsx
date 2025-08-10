import React, { useRef } from 'react'
import { Check } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
function Home() {
    const leftRef = useRef(null)
    const rightRef = useRef(null)
    useGSAP(() => {
        // Left content animation
        const tl = gsap.timeline()
        
        tl.from(".first", {
            y: 50,
            opacity: 0,
            duration:0.5,
        })
        tl.from(".second", {
            y: 50,
            opacity: 0,
            duration:0.5,
            delay: 0,
        })
        tl.from(".third", {
            y: 50,
            opacity: 0,
            duration:0.5,
            delay: 0,
        })
        tl.from(".fourth", {
            y: 50,
            opacity: 0,
            duration:0.5,
            delay: 0,
        })
        tl.from(".fifth", {
            y: 50,
            opacity: 0,
            duration:0.5,
            delay: 0,
        })
        tl.from(rightRef.current, {
            x: 50, 
            opacity: 0,
            duration: 0.5,
        })
    }, [])
    return (
        <div className="bg-[#f9f9fc] min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24">
            <main className="flex flex-col md:flex-row items-center justify-between">

                {/* Left Content */}
                <div  className=" space-y-4 md:w-[40%]">
                    <button className="first bg-green-500 text-white px-4 py-1 rounded-full text-xl font-medium">
                        Let's Go
                    </button>
                    <p className="second text-gray-500 text-lg">Next-Level Billing</p>

                    <h1 className="third text-3xl md:text-5xl font-bold leading-tight text-purple-400">
                        Digital <span className=" text-black">Invoicing For Every</span> <span className="">Business</span>
                    </h1>

                    <div className="fourth flex items-center space-x-6 mt-6">
                        <div className="flex items-center space-x-2">
                            <Check className="text-green-500" />
                            <span>Free Trial</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Check className="text-green-500" />
                            <span>24/7 Support</span>
                        </div>
                    </div>

                    <button className="fifth bg-[#0d1b2a] text-white px-6 py-3 rounded-full mt-6 font-semibold">
                        Signup Now →
                    </button>
                </div>
                <div ref={rightRef} className="md:w-[40%] mt-20 md:mt-0 relative">
                    <img
                        src="/assets/dashboard.jpg"
                        alt="Dashboard"
                        className="rounded-lg shadow-lg w-[80%] md:w-[90%] h-auto"
                    />
                    {/* <img
            src="/digital-card.png"
            alt="Digital"
            className="absolute top-10 left-10 w-28 md:w-40 shadow-lg"
          /> */}
                    {/* <img
            src="/pos-card.png"
            alt="POS"
            className="absolute bottom-10 right-10 w-28 md:w-40 shadow-lg"
          /> */}
                </div>
            </main>
        </div>
    )
}

export default Home