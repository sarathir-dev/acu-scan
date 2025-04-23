"use client";
import React from "react";
import { motion } from "motion/react";
import Footer from "@/components/footer";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { IconEyeHeart, IconHistory } from "@tabler/icons-react";
import Bento1 from "../../../public/assets/images/MedicalImaging.png";
import Bento2 from "../../../public/assets/images/Future.jpg";
import { GlowingEffectDemo } from "@/components/GlowingEffect";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.2, ease: "easeInOut" },
  }),
};

const team = [
  {
    name: "Sarathi R.",
    role: "Founder & AI Developer",
    bio: "An M.Tech student passionate about 3D medical imaging, AI, and building accessible health-tech solutions.",
    image: "/assets/images/Avatar2.jpg",
  },
  {
    name: "Aanya Patel",
    role: "UI/UX Designer",
    bio: "Focused on delivering seamless user experiences for health applications with elegant and intuitive design.",
    image: "/assets/images/Avatar3.jpg",
  },
];

const techStack = [
  { name: "Python", logo: "/assets/images/Python.png" },
  { name: "PyTorch", logo: "/assets/images/PyTorch.png" },
  { name: "React", logo: "/assets/images/React.png" },
  { name: "Three.js", logo: "/assets/images/Three.png" },
  { name: "ChatGPT API", logo: "/assets/images/ChatGPT.jpg" },
];

export default function AboutPage() {
  const headlineWords = "Making Medical Imaging Accessible".split(" ");
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
              Learn more about the vision and team behind AcuScan
            </motion.p>
          </div>
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={headlineWords.length + 4}
            className="text-center"
          >
            <h2 className="text-xl font-bold md:text-2xl lg:text-4xl">
              Our Story & Vision
            </h2>
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              custom={headlineWords.length + 1}
              className="max-w-xl mx-auto text-lg mt-5 text-neutral-600 dark:text-neutral-400"
            >
              Uniting technology and humanity to transform medical diagnostics
              into life-saving tools for every corner of the world
            </motion.p>
            <div className="mt-16">
              <BentoGridDemo />
            </div>
          </motion.div>
          <section className="py-10 px-6">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">The Team</h2>
              <div className="grid md:grid-cols-2 gap-12">
                {team.map((member, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div>
            <h2 className="text-xl text-center my-16 font-bold md:text-2xl lg:text-4xl">
              Our Values
            </h2>
            <GlowingEffectDemo />
          </div>
          <section className="py-20 px-6">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
              <div className="flex justify-center flex-wrap gap-16">
                {techStack.map((tech, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-16 h-16 object-contain rounded-full"
                    />
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
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

export function BentoGridDemo() {
  return (
    <BentoGrid className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className="w-full"
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Our Story",
    description:
      "AcuScan was born out of a need to simplify the interpretation of complex medical images. With AI advancements and growing access to 3D datasets, we wanted to bridge the gap between machine intelligence and clinical utility. This journey involved extensive research, real-world trials, and countless iterations.",
    header: (
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <Image
          src={Bento1}
          alt="Instant Clarity"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconHistory className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Our Vision",
    description:
      "Our long-term goal is to make advanced diagnostic tools available in every corner of the world — from bustling cities to remote clinics. AcuScan is designed to be intuitive, accurate, and scalable, ensuring doctors and researchers can focus on what matters most: saving lives",
    header: (
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <Image
          src={Bento2}
          alt="Instant Clarity"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconEyeHeart className="h-4 w-4 text-neutral-500" />,
  },
];
