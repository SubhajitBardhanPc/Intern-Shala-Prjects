'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative z-10 overflow-hidden py-24 px-4 sm:px-6 lg:px-8
                 bg-gradient-to-br from-black via-zinc-950 to-neutral-950 text-white text-center
                 rounded-3xl shadow-2xl mx-auto container my-20"
    >
      {/* Background Blur Lights */}
      <div className="absolute -top-32 left-1/2 w-[50rem] h-[50rem] -translate-x-1/2
                      bg-gradient-to-br from-btn-primary via-btn-secondary to-purple-800
                      opacity-15 rounded-full blur-3xl z-0" />

      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
        >
          Ready to Elevate Your Digital Presence?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-subheading text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join the next-gen development workflow with{' '}
          <span className="text-btn-primary font-semibold">WeebyWolf</span> and transform your ideas into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {/* ✅ asChild requires exactly one element — keep Link inline */}
          <Button
            asChild
            className="px-10 py-3 text-lg rounded-full font-subheading font-semibold
                       bg-btn-primary text-white shadow-lg
                       hover:bg-btn-secondary hover:scale-105
                       transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-4 focus:ring-btn-primary focus:ring-opacity-50"
          >
            <Link href="#contact">
              🚀 Get Started Today
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
