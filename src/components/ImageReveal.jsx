// ImageRevealSquareOutward.jsx
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal() {
  const containerRef = useRef(null);
  const tlRef = useRef(null);
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);

  useEffect(() => {
    // timeline with ScrollTrigger
    tlRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });

    // animate quadrants outward
    tlRef.current
      .to(
        topLeftRef.current,
        { x: "-120%", y: "-120%", duration: 2, ease: "power2.inOut" },
        0
      )
      .to(
        topRightRef.current,
        { x: "120%", y: "-120%", duration: 2, ease: "power2.inOut" },
        0
      )
      .to(
        bottomLeftRef.current,
        { x: "-120%", y: "120%", duration: 2, ease: "power2.inOut" },
        0
      )
      .to(
        bottomRightRef.current,
        { x: "120%", y: "120%", duration: 2, ease: "power2.inOut" },
        0
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mt-5 w-full h-[400px] md:h-[600px] overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/bgimgreveal.jpeg')",
        }}
      />

      {/* Full square cover made of 4 quadrants */}
      <div className="absolute inset-0">
        <div
          ref={topLeftRef}
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#9cb7be]"
          style={{ transformOrigin: "center center" }}
        />
        <div
          ref={topRightRef}
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#9cb7be]"
          style={{ transformOrigin: "center center" }}
        />
        <div
          ref={bottomLeftRef}
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#9cb7be]"
          style={{ transformOrigin: "center center" }}
        />
        <div
          ref={bottomRightRef}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#9cb7be]"
          style={{ transformOrigin: "center center" }}
        />
      </div>
    </div>
  );
}
