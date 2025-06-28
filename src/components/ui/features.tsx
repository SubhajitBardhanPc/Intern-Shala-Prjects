// src/components/features/Features.tsx
'use client';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Import your custom Card components
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

// Adjusted features data to include icons for better visual appeal
const featuresData = [
  {
    icon: '✨', // Using emojis for now, can be replaced with Lucide icons or SVGs
    title: "Modern UI",
    description: "Experience sleek, intuitive interfaces built with cutting-edge Tailwind CSS and ShadCN components.",
  },
  {
    icon: '⚡',
    title: "Blazing Fast Performance",
    description: "Optimized with Next.js 14 and intelligent rendering for lightning-fast load times and smooth interactions.",
  },
  {
    icon: '💡',
    title: "Developer Friendly",
    description: "Benefit from clean, extensible, and well-documented components, making future development a breeze.",
  },
  {
    icon: '📱',
    title: "Fully Responsive",
    description: "Our designs adapt flawlessly to any screen size, ensuring a consistent and delightful experience on all devices.",
  },
  {
    icon: '🔒',
    title: "Secure & Robust",
    description: "Built with industry-leading security practices and a resilient architecture to protect your data and ensure reliability.",
  },
  {
    icon: '⚙️',
    title: "Customizable & Scalable",
    description: "Tailor solutions to your unique needs with highly customizable components that scale with your growth.",
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation only plays once when the section comes into view
    threshold: 0.1,    // Trigger when 10% of the section is visible
  });

  // Animation variants for the feature cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-black">
      <motion.h2
        className="font-heading text-5xl md:text-6xl font-bold mb-16 text-white leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Why WeebyWolf Stands Out
      </motion.h2>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto" // Increased max-width
      >
        {featuresData.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Animate based on inView state
            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }} // Staggered delay
            className="group" // ADDED: 'group' class for hover effects on children
          >
            {/* ADDED: Background, border, and full padding to the Card component */}
            {/* The default padding of CardHeader/Content will add on top of this or override if set more specifically */}
            <Card className="h-full flex flex-col items-center
                             bg-zinc-900 border border-gray-800 text-center rounded-xl shadow-lg
                             transform transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
              <CardHeader className="flex flex-col items-center pt-8 px-6 pb-2"> {/* Adjusted padding */}
                <motion.div
                  className="text-btn-primary text-5xl mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {feature.icon}
                </motion.div>
                <CardTitle className="font-subheading text-2xl font-semibold text-white group-hover:text-btn-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-8 flex-grow"> {/* Adjusted padding and added flex-grow */}
                <CardDescription className="text-gray-300 text-base leading-relaxed"> {/* Changed text-lg to text-base for better readability */}
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}