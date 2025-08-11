import React, { useRef, useEffect, useState } from 'react'
import { Check, Scroll } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ImpactNumbers from './ImpactNumbers'
import TopicSlider from './TopicSlider'
import "../css/rotate.css";
import Testimonial from '../components/Testimonial'
import ScrollingText from '../components/ScrollingText'
import ImageReveal from '../components/ImageReveal'
function Home() {
    const rightRef = useRef(null)
    useGSAP(() => {
        // Left content animation
        const tl = gsap.timeline()

        tl.from(".first", {
            y: 50,
            opacity: 0,
            duration: 0.5,
        })
        tl.from(".second", {
            y: 50,
            opacity: 0,
            duration: 0.5,
            delay: 0,
        })
        tl.from(".third", {
            y: 50,
            opacity: 0,
            duration: 0.5,
            delay: 0,
        })
        tl.from(".fourth", {
            y: 50,
            opacity: 0,
            duration: 0.5,
            delay: 0,
        })
        tl.from(".fifth", {
            y: 50,
            opacity: 0,
            duration: 0.5,
            delay: 0,
        })
        tl.from(rightRef.current, {
            x: 50,
            opacity: 0,
            duration: 0.5,
        })
        gsap.to(".text", {
            x: window.innerWidth + 200, // Move across the whole screen
            duration: 5,                // Animation duration in seconds
            repeat: -1,                  // Infinite loop
            ease: "linear"               // Smooth constant speed
        });
    }, [])



    return (
        <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 min-h-screen flex flex-col justify-center pt-24">

            <main className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex flex-col md:flex-row items-center md:px-16 px-6 md:py-10 py-4 justify-between">

                {/* Left Content */}
                <div className=" space-y-4 md:w-[40%]">
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
                        className="rounded-lg shadow-lg w-[9    0%] md:w-[90%] h-auto"
                    />
                </div>
            </main>

            <div className=" flex flex-col items-center justify-center text-center mt-5 py-16 px-6">
                <h1 className="text-2xl md:text-3xl font-medium text-gray-800 max-w-3xl leading-snug">
                    Welcome to{" "}
                    <span className="font-bold text-green-500">Octal Accounts</span> – your
                    trusted partner in simplified accounting and{" "}
                    <span className="font-bold text-green-600">
                        business management
                    </span>{" "}
                    solutions.
                </h1>

                {/* Decorative underline / swirl image */}
                <img
                    src="/assets/swirl.jpeg"
                    alt="decorative underline"
                    className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 mt-6 w-20 md:w-28"
                />
            </div>
            <ScrollingText />  
            <ImpactNumbers />
            <div className="flex flex-col lg:flex-row items-center justify-around p-2 bg-gray-100  lg:w-[90%] z-50 mx-auto lg:-mt-20 shadow-lg rounded-lg">
                <div className="lg:w-[60%] w-[80%]">
                    <h1 className="text-4xl font-bold">
                        Join us to build something amazing – <span className="text-green-300">Octal Accounts</span>, customized for you.
                    </h1>
                    <a
                        href="#"
                        className="inline-block bg-white text-green-600 rounded-lg px-6 py-2 font-semibold transition duration-300 hover:bg-gray-200"
                    >
                        Free Trial
                    </a>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-[40%] w-[80%]">
                    <img src="assets/dashboard.jpg" alt="Octal Accounts Dashboard" className="w-[70%] h-auto" />
                </div>
            </div>
            <TopicSlider />
            <div className="relative flex flex-col items-center justify-center text-center mt-5 py-16 px-6 overflow-hidden">
                {/* Rotating background */}
                <div
                    className="absolute inset-0 bg-center bg-cover rotate-slow opacity-20"
                    style={{
                        backgroundImage: "url('/assets/swirl.jpeg')",
                    }}
                ></div>

                {/* Text content */}
                <h1 className="text-2xl md:text-5xl font-medium text-gray-800 max-w-3xl leading-snug relative z-10">
                    Empowering Business{" "}
                    <span className="font-bold text-green-500">With Smart</span> accounting
                    for confident growth
                </h1>

                {/* Decorative underline */}
                <img
                    src="/assets/swirl.jpeg"
                    alt="decorative underline"
                    className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 mt-6 w-20 md:w-28 relative z-10"
                />
            </div>
            <ImageReveal/>
            <Testimonial />
            <ScrollingText />
        </div>
    )
}

export default Home