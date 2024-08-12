"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const FadeIn = ({ children, addistyle }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger animation when 10% of the component is visible
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1500ms] ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={addistyle}
    >
      {children}
    </div>
  );
};

export default FadeIn;
