// src/components/hero/Hero.tsx
'use client'; // Required for framer-motion and interactive elements

import { motion } from "framer-motion"; // For captivating animations
import Link from "next/link"; // For smooth internal navigation
import { Button } from "@/components/ui/button"; // Your custom ShadCN Button

export default function Hero() {
  return (
    <section className="relative w-full py-28 md:py-36 lg:py-48 text-center bg-black overflow-hidden">
      {/* Decorative background gradients for visual interest */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/2 w-[70rem] h-[70rem] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-btn-primary/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] translate-x-1/3 translate-y-1/3 bg-gradient-to-br from-btn-secondary/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading with Framer Motion animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter text-white"
        >
          Pixel-Perfect Designs, <br className="hidden sm:block"/> Fluid Interactions.
        </motion.h1>

        {/* Sub-paragraph with Framer Motion animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-subheading text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed"
        >
          WebbyWolf empowers developers and businesses with stunning UIs, blazing-fast performance,
          and a seamless digital experience tailored to your vision.
        </motion.p>

        {/* CTA Button with Framer Motion animation and ShadCN Button component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <Button
            asChild // Allows the Button to render as a Link component
            className="px-10 py-3 sm:px-12 sm:py-3.5 text-lg sm:text-xl rounded-full font-subheading font-semibold
                       bg-btn-primary text-white shadow-lg
                       hover:bg-btn-secondary hover:scale-105
                       transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-4 focus:ring-btn-primary focus:ring-opacity-50"
          >
            <Link href="/#contact">
              Get Started Today
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}