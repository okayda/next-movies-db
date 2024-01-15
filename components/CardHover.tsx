"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CardHover({ children }: { children: React.ReactNode }) {
  const [rotations, setRotations] = useState({ x: 0, y: 0, z: 0 });
  const [isAnimating, setAnimating] = useState(false);
  const isAnimatingReference = useRef(isAnimating);

  const round = function (num: number, fix = 2) {
    return parseFloat(num.toFixed(fix));
  };

  const distance = function (x1: any, y1: any, x2: any, y2: any) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const animate = (event: any) => {
    setAnimating(true);

    const rect = event.currentTarget.getBoundingClientRect();

    const absolute = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    const percent = {
      x: round((100 / rect.width) * absolute.x),
      y: round((100 / rect.height) * absolute.y),
    };

    const center = {
      x: percent.x - 50,
      y: percent.y - 50,
    };

    setRotations({
      x: round(((center.x > 50 ? 1 : -1) * center.x) / 12),
      y: round(center.y / 16),
      z: round(distance(percent.x, percent.y, 50, 50) / 20),
    });
  };

  const stopAnimating = () => {
    setAnimating(false);

    setTimeout(() => {
      if (isAnimatingReference.current) return;

      setRotations({ x: 0, y: 0, z: 2 });
    }, 100);
  };
  return (
    <motion.div
      // Mouse interactions events handlers.
      onMouseMove={animate}
      onMouseLeave={stopAnimating}
      animate={{
        // Rotation values used to tilt the card.
        rotateY: rotations.x,
        rotateX: rotations.y,
        transformPerspective: rotations.z * 250,
      }}
      style={{
        width: "100%",
        borderRadius: "0.5rem",
        boxShadow:
          "0 0 0 1px rgba(0, 0, 0, 0.105), 0 9px 20px 0 rgba(0, 0, 0, 0.02), 0 1px 2px 0 rgba(0, 0, 0, 0.106)",
        transformStyle: "preserve-3d",
        transformOrigin: "center",
        perspective: "320px",
      }}
    >
      {children}
    </motion.div>
  );
}
