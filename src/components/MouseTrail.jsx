import { useState, useEffect } from "react";

export default function MouseTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if the hovered element has pointer cursor
      const hoveredElement = e.target;
      const computedStyle = window.getComputedStyle(hoveredElement);
      setIsPointer(computedStyle.cursor === "pointer");
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Outer Border Circle */}
      <div
        className={`border-2 border-green-200 rounded-full fixed pointer-events-none transition-all duration-300 ease-out ${
          isPointer ? "w-9 h-9" : "w-6 h-6"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Small White Dot (Cursor Follower) - Hide if Pointer
      {!isPointer && (
        <div
          className="w-2 h-2 bg-white rounded-full fixed"
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
          }}
        > 

        </div>
      )}*/}
    </>
  );
}
