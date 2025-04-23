import React from "react";
import Footer from "@/components/footer";

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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center py-32 px-6 text-center bg-[url('/images/hero-collab.jpg')]">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Mission: Making Medical Imaging Accessible
          </h1>
          <p className="max-w-2xl mx-auto">
            Learn more about the vision and team behind AcuScan.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 mt-8 items-center">
            <img
              src="/assets/images/MedicalImaging.png"
              alt="Medical Challenge"
              className="rounded-2xl shadow-lg"
            />
            <p className="text-lg">
              AcuScan was born out of a need to simplify the interpretation of
              complex medical images. With AI advancements and growing access to
              3D datasets, we wanted to bridge the gap between machine
              intelligence and clinical utility. This journey involved extensive
              research, real-world trials, and countless iterations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Vision</h2>
          <div className="grid md:grid-cols-2 gap-12 mt-8 items-center">
            <p className="text-lg">
              Our long-term goal is to make advanced diagnostic tools available
              in every corner of the world — from bustling cities to remote
              clinics. AcuScan is designed to be intuitive, accurate, and
              scalable, ensuring doctors and researchers can focus on what
              matters most: saving lives.
            </p>
            <img
              src="/assets/images/Future.jpg"
              alt="Future of Healthcare"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 px-6">
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

      {/* Our Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <ul className="max-w-4xl mx-auto space-y-4 text-center text-lg">
            <li>
              <strong>Innovation:</strong> Continuously pushing the boundaries
              of AI in healthcare.
            </li>
            <li>
              <strong>Accessibility:</strong> Bringing quality diagnostics to
              all, regardless of location.
            </li>
            <li>
              <strong>Accuracy:</strong> Backed by state-of-the-art models and
              real-world validations.
            </li>
            <li>
              <strong>User-centricity:</strong> Designed for doctors,
              researchers, and patients.
            </li>
          </ul>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="flex justify-center flex-wrap gap-10">
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

      {/* Footer */}
      <Footer />
      <div className="mt-10"></div>
    </div>
  );
}
