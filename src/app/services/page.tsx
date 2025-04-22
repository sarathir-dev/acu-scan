"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/footer";

const services = [
  {
    title: "Advanced 2D Organ Classification",
    description:
      "Harnessing the OrganMNIST dataset, AcuScan's AI achieves high-accuracy classification of various human organs in 2D scans.",
    image: "/assets/images/Services1.jpg",
    caption: "Accurate classification powered by deep learning.",
  },
  {
    title: "Intelligent Plain Language Reporting",
    description:
      "With integrated ChatGPT API, AcuScan translates complex scan results into easy-to-understand explanations for all users.",
    image: "/assets/images/Services2.jpg",
    caption: "Bridging the communication gap with clear explanations.",
  },
  {
    title: "Secure and Private Image Handling",
    description:
      "We prioritize your privacy with encrypted storage, secure upload pipelines, and compliance with healthcare data standards.",
    image: "/assets/images/Services3.jpeg",
    caption: "Your data is handled with utmost security and privacy.",
  },
  {
    title: "Customizable Integration Options",
    description:
      "AcuScan provides flexible integration APIs, allowing seamless embedding into your existing tools or research pipelines.",
    image: "/assets/images/Services4.jpg",
    caption: "Flexible integration options for your existing systems.",
  },
];

const beneficiaries = [
  {
    title: "For Healthcare Professionals",
    description:
      "Enhances diagnostic accuracy, streamlines reporting, and improves patient interaction.",
    image: "/assets/images/Services5.jpg",
    caption: "Empowering healthcare professionals with AI-driven insights.",
  },
  {
    title: "For Patients",
    description:
      "Delivers clearer understanding of diagnoses and promotes active participation in healthcare.",
    image: "/assets/images/Services6.jpg",
    caption: "Enhancing patient understanding and engagement.",
  },
  {
    title: "For Researchers/Educators",
    description:
      "Provides a reliable platform for teaching and advancing medical imaging research.",
    image: "/assets/images/Services7.jpg",
    caption: "A valuable tool for medical research and education.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative mx-auto flex flex-col items-center justify-center">
      <div className="container px-4 py-10 md:py-20">
        {/* Headline */}
        <h1 className="text-center text-2xl md:text-4xl lg:text-7xl font-bold max-w-4xl mx-auto">
          {"Empowering Your Medical Image Analysis"
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="text-center max-w-2xl mx-auto py-6 text-lg text-neutral-600 dark:text-neutral-400"
        >
          AcuScan leverages advanced AI to interpret 2D medical scans with
          unmatched simplicity and precision—bridging the gap between complex
          medical data and clear human understanding.
        </motion.p>

        {/* Key Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-full max-w-[600px] h-[350px] mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2 max-w-md">
                {service.description}
              </p>
              <span className="text-sm text-neutral-500 italic">
                {service.caption}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-24">
          <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12">
            Who Benefits from AcuScan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {beneficiaries.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-[350px] h-[220px] relative mb-4">
                  <Image
                    src={b.image}
                    alt={b.title}
                    layout="fill"
                    className="rounded-xl shadow-md object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-1 max-w-sm">
                  {b.description}
                </p>
                <span className="text-sm text-neutral-500 italic">
                  {b.caption}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to experience AcuScan?
          </h3>
          <p className="text-lg mb-6 text-neutral-600 dark:text-neutral-400">
            Try our interactive demo or get in touch for more details on how
            AcuScan can benefit you.
          </p>
          <div className="flex justify-center gap-4">
            <button className="w-48 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Try Demo
            </button>
            <button className="w-48 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Contact Us
            </button>
          </div>
        </div>

        {/* Footer */}
        <motion.div className="mt-24">
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}
