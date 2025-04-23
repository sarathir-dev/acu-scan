"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconCloudUp, IconCpu, IconEye } from "@tabler/icons-react";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonials";
import { BentoGridDemo } from "./BentoGrid";
import Footer from "./footer";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.2, ease: "easeInOut" },
  }),
};

export function HeroSectionOne() {
  const headlineWords =
    "AI-Powered 2D Medical Image Analysis Made Simple".split(" ");

  return (
    <div className="relative mx-auto flex flex-col items-center justify-center">
      <div className="container">
        <div className="absolute inset-y-0 left-0 w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        <div className="px-4 py-10 md:py-20 space-y-20">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl max-w-4xl mx-auto">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={headlineWords.length + 1}
              className="max-w-xl mx-auto text-lg text-neutral-600 dark:text-neutral-400"
            >
              Unlock clear insights from medical scans with our intuitive
              AI-driven platform. Understand complex imagery with ease.
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={headlineWords.length + 2}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <button className="w-60 rounded-lg bg-black px-6 py-2 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Demo
              </button>
              <button className="w-60 rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                Learn More
              </button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={headlineWords.length + 3}
            className="relative mx-auto max-w-5xl rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
            <Image
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="Landing page preview"
              width={1000}
              height={562}
              className="aspect-[16/9] w-full h-auto rounded-xl object-cover border border-gray-300 dark:border-gray-700"
            />
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={headlineWords.length + 4}
            className="text-center"
          >
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Medical Imaging, Simplified
            </h2>
            <div className="mt-16">
              <BentoGridDemo />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={headlineWords.length + 5}
            className="text-center"
          >
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-12">
              Unlocking Insights: The AcuScan Process
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {[
                {
                  icon: <IconCloudUp className="w-8 h-8 md:w-10 md:h-10" />,
                  title: "Your Image",
                  desc: "Upload any 2D medical scan.",
                },
                {
                  icon: <IconCpu className="w-8 h-8 md:w-10 md:h-10" />,
                  title: "AI Engine",
                  desc: "Our AI processes and understands the image.",
                },
                {
                  icon: <IconEye className="w-8 h-8 md:w-10 md:h-10" />,
                  title: "Clear Understanding",
                  desc: "Get results and simple explanations.",
                },
              ].map(({ icon, title, desc }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center max-w-xs"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4">
                    {icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={headlineWords.length + 6}
            className="text-center"
          >
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl mb-12">
              Testimonials
            </h2>
            <AnimatedTestimonialsDemo />
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={headlineWords.length + 7}
          >
            <Footer />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
