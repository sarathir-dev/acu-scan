"use client";

import { motion } from "motion/react";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonials";
import Footer from "./footer";
import { BentoGridDemo } from "./BentoGrid";
import { IconCloudUp, IconCpu, IconEye } from "@tabler/icons-react";
import Image from "next/image";

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto flex flex-col items-center justify-center">
      <div className="container">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="px-4 py-10 md:py-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl">
            {"AI-Powered 2D Medical Image Analysis Made Simple"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            Unlock clear insights from medical scans with our intuitive
            AI-driven platform. Understand complex imagery with ease
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Demo
            </button>
            <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Learn More
            </button>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 1.2,
            }}
            className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
              <Image
                src="https://assets.aceternity.com/pro/aceternity-landing.webp"
                alt="Landing page preview"
                width={1000}
                height={1000}
                className="aspect-[16/9] h-auto w-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 1.2,
            }}
            className="px-4 mt-6 py-10 md:py-20"
          >
            <h2 className="relative z-10 mx-auto max-w-2xl text-center text-xl font-bold md:text-2xl lg:text-3xl">
              Medical Imaging, Simplified
            </h2>
            <div className="mt-16">
              <BentoGridDemo />
            </div>
          </motion.div>
          {/* How it works */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 1.2,
            }}
            className="px-4 py-10 md:py-20"
          >
            <h2 className="relative z-10 mx-auto max-w-2xl text-center text-2xl font-bold md:text-3xl lg:text-4xl mb-8 ">
              Unlocking Insights: The AcuScan Process
            </h2>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4">
                  <IconCloudUp className="w-8 h-8 md:w-10 md:h-10" />{" "}
                </div>
                <h3 className="text-lg font-semibold mb-2">Your Image</h3>
                <p className="max-w-xs">Upload any 2D medical scan.</p>
              </div>

              <div className="hidden md:block">→</div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4">
                  <IconCpu className="w-8 h-8 md:w-10 md:h-10" />{" "}
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Engine</h3>
                <p className="max-w-xs">
                  Our AI processes and understands the image.
                </p>
              </div>

              <div className="hidden md:block">→</div>

              {/* Section 3: Clear Understanding */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-ful flex items-center justify-center mb-4">
                  <IconEye className="w-8 h-8 md:w-10 md:h-10" />{" "}
                  {/* Eye/Lightbulb Icon */}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Clear Understanding
                </h3>
                <p className="max-w-xs">Get results and simple explanations.</p>
              </div>
            </div>
          </motion.div>
          {/* Testimonials */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 1.2,
            }}
            className="px-4 py-10 md:py-20"
          >
            <h2 className="relative z-10 mx-auto max-w-2xl text-center text-xl font-bold md:text-2xl lg:text-3xl">
              Testimonials
            </h2>
            <AnimatedTestimonialsDemo />
          </motion.div>
          <motion.div>
            <Footer />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
