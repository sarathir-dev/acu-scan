import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
  IconEaseInOut,
  IconHourglassEmpty,
  IconPhotoScan,
  IconWorldShare,
  IconBrandLine,
  IconArrowsJoin,
  IconBrain,
} from "@tabler/icons-react";
import Image from "next/image";
import Bento1 from "../../public/assets/images/Bento1.jpg";
import Bento2 from "../../public/assets/images/Bento2.jpg";
import Bento3 from "../../public/assets/images/Bento3.jpg";
import Bento4 from "../../public/assets/images/Bento4.jpg";
import Bento5 from "../../public/assets/images/Bento5.jpg";
import Bento6 from "../../public/assets/images/Bento6.jpg";
import Bento7 from "../../public/assets/images/Bento7.jpg";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-screen mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Instant Clarity",
    description:
      "Get rapid organ classification from your 2D medical images, delivering crucial insights in moments",
    header: (
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <Image
          src={Bento1}
          alt="Instant Clarity"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconHourglassEmpty className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Plain Language Understanding",
    description:
      "Complex medical findings are translated into simple, everyday language, making analysis accessible to everyone",
    header: (
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <Image
          src={Bento2}
          alt="Instant Clarity"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconEaseInOut className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Versatile Image Support",
    description:
      "Analyze a wide array of 2D medical image types, including X-rays, CT scans, and MRIs, all within one platform",
    header: (
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <Image
          src={Bento3}
          alt="Instant Clarity"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconPhotoScan className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Empowered Patient Communication",
    description:
      "Explain medical scans and diagnoses more effectively to patients using clear, AI-generated descriptions",
    header: (
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <Image
          src={Bento4}
          alt="Instant Clarity"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconBrandLine className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Streamlined Workflow",
    description:
      "Accelerate your initial image analysis, allowing you to focus on complex cases and improve overall efficiency",
    header: (
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <Image
          src={Bento5}
          alt="Instant Clarity"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconArrowsJoin className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Access Anywhere",
    description:
      "Being web-based, AcuScan provides the flexibility to analyze images securely from any internet-connected device",
    header: (
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <Image
          src={Bento6}
          alt="Instant Clarity"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconWorldShare className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Continuously Improving AI",
    description:
      "Benefit from an AI model that's constantly learning and being updated, leading to increasingly accurate and insightful analysis.",
    header: (
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <Image
          src={Bento7}
          alt="Instant Clarity"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
];
