import { cn } from "@/lib/utils";
import {
  IconEaseInOut,
  IconHourglassEmpty,
  IconPhotoScan,
  IconUserShield,
  IconWorldShare,
  IconBrandLine,
  IconArrowsJoin,
  IconBrain,
} from "@tabler/icons-react";

export function FeaturesSections() {
  const features = [
    {
      title: "Instant Clarity",
      description:
        "Get rapid organ classification from your 2D medical images, delivering crucial insights in moments",
      icon: <IconHourglassEmpty />,
    },
    {
      title: "Plain Language Understanding",
      description:
        "Complex medical findings are translated into simple, everyday language, making analysis accessible to everyone",
      icon: <IconEaseInOut />,
    },
    {
      title: "Versatile Image Support",
      description:
        "Analyze a wide array of 2D medical image types, including X-rays, CT scans, and MRIs, all within one platform",
      icon: <IconPhotoScan />,
    },
    {
      title: "Boost Diagnostic Confidence",
      description:
        "Enhance your interpretations with AI-powered second opinions, providing additional assurance in your diagnostic decisions",
      icon: <IconUserShield />,
    },
    {
      title: "Empowered Patient Communication",
      description:
        "Explain medical scans and diagnoses more effectively to patients using clear, AI-generated descriptions",
      icon: <IconBrandLine />,
    },
    {
      title: "Streamlined Workflow",
      description:
        "Accelerate your initial image analysis, allowing you to focus on complex cases and improve overall efficiency",
      icon: <IconArrowsJoin />,
    },
    {
      title: "Access Anywhere",
      description:
        "Being web-based, AcuScan provides the flexibility to analyze images securely from any internet-connected device",
      icon: <IconWorldShare />,
    },
    {
      title: "Continuously Improving AI",
      description:
        "Benefit from an AI model that's constantly learning and being updated, leading to increasingly accurate and insightful analysis.",
      icon: <IconBrain />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 maz-w-screen mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
