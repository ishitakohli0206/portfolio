"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 90%)",
        }}
      />

      {/* moving glow */}
      <motion.div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, #4e7cff2e, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ x: [0, 40, -30, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute -top-24 right-[8%] h-[280px] w-[280px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, #8b6bff22, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* bottom fade into page background */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
