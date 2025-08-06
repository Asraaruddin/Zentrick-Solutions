import React from "react";
import {
  Cloud,
  ShieldCheck,
  Code,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

// Top stat cards
const statCards = [
  { label: "500+", value: "Projects Completed" },
  { label: "150+", value: "Happy Clients" },
  { label: "99.9%", value: "Uptime Guaranteed" },
  { label: "24/7", value: "Support Available" },
];

// Bottom feature cards
const featureCards = [
  {
    icon: <Cloud size={36} className="text-[#064DC7]" />,
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure for modern businesses",
  },
  {
    icon: <ShieldCheck size={36} className="text-[#064DC7]" />,
    title: "Cybersecurity",
    desc: "Comprehensive security to protect your digital assets",
  },
  {
    icon: <Code size={36} className="text-[#064DC7]" />,
    title: "Custom Development",
    desc: "Tailored software solutions for your unique needs",
  },
  {
    icon: <TrendingUp size={36} className="text-[#064DC7]" />,
    title: "Data Analytics",
    desc: "Transform data into actionable business insights",
  },
];

export default function DashboardCardsSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center px-4 md:px-8 lg:px-0">

      {/* Stat Cards */}
      <div className="w-full max-w-[1220px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center justify-center bg-[#064DC714] rounded-[12px] shadow-sm px-6 py-4 h-[96px]"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <div className="font-sans font-bold text-[32px] sm:text-[36px] text-[#123450] leading-[1]">
                {stat.label}
              </div>
              <div className="font-sans font-semibold text-[12px] text-[#123450] mt-1">
                {stat.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section Heading */}
      <div className="w-full max-w-[800px] text-center mt-12 mb-6 px-4">
        <h3 className="font-sans font-bold text-[26px] sm:text-[32px] md:text-[36px] text-[#041D31] leading-tight mb-3">
          Comprehensive IT Solutions
        </h3>
        <div className="flex items-center justify-center text-[#041D31] text-[16px] sm:text-[18px]">
          We provide end-to-end technology services to help businesses thrive in the digital age
          <ArrowRight size={18} className="ml-1" />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="w-full max-w-[1196px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mb-16">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-center justify-between border border-[#064DC766] rounded-[12px] bg-white px-5 py-6 hover:shadow-lg transition min-h-[239px] text-center"
          >
            {card.icon}
            <div className="font-sans font-bold text-lg text-[#064DC7] mt-4 mb-2">
              {card.title}
            </div>
            <div className="font-sans text-[15px] text-[#202020]">
              {card.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
