import React from "react";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

// Pricing Plans
const plans = [
  {
    title: "Basic",
    price: "Free",
    description: "For individuals getting started with AcuScan.",
    features: ["Scan 5 files/month", "Basic reports", "Email support"],
    highlight: false,
  },
  {
    title: "Pro",
    price: "$19/month",
    description: "For professionals needing deeper insights.",
    features: [
      "Unlimited scans",
      "Advanced report analytics",
      "Priority support",
      "Team collaboration",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale organizations.",
    features: [
      "Dedicated infrastructure",
      "Advanced compliance tools",
      "24/7 support",
      "SLAs & onboarding",
    ],
    highlight: false,
  },
];

// Testimonials Data
const testimonials = [
  {
    name: "Sarah Thompson",
    title: "CTO, HealthAI",
    text: "AcuScan revolutionized our medical workflow. The insights it provides from scans are unmatched.",
    img: "/assets/images/Avatar1.jpg",
  },
  {
    name: "Rahul Menon",
    title: "Data Engineer, BioNexus",
    text: "Clean UI, powerful AI engine, and responsive support. This tool is a game changer for radiologists.",
    img: "/assets/images/Avatar2.jpg",
  },
  {
    name: "Olivia Reyes",
    title: "Product Manager, MedTech",
    text: "It only took us a day to integrate AcuScan into our pipeline. The results have been outstanding.",
    img: "/assets/images/Avatar3.jpg",
  },
  {
    name: "David Liu",
    title: "Founder, ScanIQ",
    text: "Their team really understands what clinicians need. We saved weeks in diagnosis time with their platform.",
    img: "/assets/images/Avatar4.jpg",
  },
  {
    name: "Aisha Mohammed",
    title: "Research Lead, Genomic Vision",
    text: "From precision to performance, AcuScan delivers everything our research team asked for.",
    img: "/assets/images/Avatar5.jpg",
  },
  {
    name: "Carlos Ramirez",
    title: "Senior Analyst, NeuroScan Corp",
    text: "It’s rare to find AI tools that are this intuitive. Highly recommend AcuScan for any health-tech team.",
    img: "/assets/images/Avatar6.jpg",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
      {/* Pricing Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Simple Pricing, No Surprises
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Choose a plan that fits your needs and scale effortlessly.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-xl p-8 border transition-all ${
                plan.highlight
                  ? "bg-gray-100 dark:bg-gray-900 border-blue-500 scale-105"
                  : "bg-white dark:bg-neutral-950 border-gray-200 dark:border-gray-800"
              }`}
            >
              <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {plan.description}
              </p>
              <ul className="space-y-3 mb-6 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">
                {plan.title === "Enterprise" ? "Contact Us" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our users say
          </h2>
          <p>Trusted by teams across health-tech and AI research industries.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl p-6 text-left flex flex-col justify-between shadow-md border"
            >
              <p className="mb-6">{t.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.title}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="currentColor"
                          stroke="none"
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s talk and make it happen
          </h2>
          <p className="mb-8">
            Reach out to us, and we&apos;ll respond as soon as possible.
          </p>
          <Button className="text-lg px-6 py-3 rounded-full shadow-xl">
            Talk to us
          </Button>

          {/* Avatars */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {testimonials.slice(0, 6).map((t, i) => (
              <img
                key={i}
                src={t.img}
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                alt={t.name}
              />
            ))}
            <div className="flex text-yellow-400 ml-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-10"></div>
      <Footer />
      <div className="mt-10"></div>
    </div>
  );
}
