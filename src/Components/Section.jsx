import React from "react";
import { CheckCircle, Award, ShieldCheck, User, TrendingUp } from "lucide-react";

const cardContent = [
  {
    icon: <User size={36} className="text-[#1181F7]" />,
    title: "Expert Team",
    desc: "Certified professionals with deep industry expertise.",
  },
  {
    icon: <ShieldCheck size={36} className="text-[#33AFF9]" />,
    title: "Fast Delivery",
    desc: "Agile methodologies for rapid project completion.",
  },
  {
    icon: <TrendingUp size={36} className="text-[#1181F7]" />,
    title: "Secure Solutions",
    desc: "Enterprise-grade security in every solution.",
  },
  {
    icon: <Award size={36} className="text-[#33AFF9]" />,
    title: "Proven Results",
    desc: "Track record of delivering measurable ROI.",
  },
];

export default function SectionLayout() {
  return (
    <div className="w-full min-h-screen bg-[#F4F5F6] overflow-x-hidden">
      {/* ---- SECTION 1 ---- */}
      <section className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center py-10 px-4 lg:px-8">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* ---- Left Column ---- */}
          <div className="flex flex-col items-start justify-between w-full lg:w-1/2">
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-[#1F2A34] mb-4 leading-tight text-center lg:text-left">
              Why Choose Zentrix Solutions?
            </h2>
            <p className="font-sans text-[#444] text-[18px] lg:text-[19px] mb-4 max-w-[545px] text-center lg:text-left">
              We're not just another IT company. We're your strategic technology partner—committed to your long-term success.
            </p>
            <ul className="flex flex-col gap-4 mt-8 mb-4">
              {[
                "Proven track record with 500+ successful projects",
                "Expert team with 10+ years of industry experience",
                "24/7 support and maintenance services",
                "Scalable solutions that grow with your business",
                "Cost-effective technology investments",
                "Compliance with industry standards and regulations",
              ].map((point, i) => (
                <li
                  key={i}
                  className="flex items-center text-[16px] lg:text-[17px] text-[#202020] font-medium"
                >
                  <CheckCircle size={22} className="text-[#33AFF9] mr-3 min-w-6" strokeWidth={2.2} />
                  {point}
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-center lg:justify-start">
              <button className="mt-4 bg-[#1181F7] hover:bg-[#0865cc] text-white px-8 py-3 rounded-[7px] font-bold text-[16px] shadow transition">
                Learn more about Us
              </button>
            </div>
          </div>

          {/* ---- Right: 4 Cards in 2x2 Grid ---- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
            {cardContent.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#DFE8FB] rounded-[18px] flex flex-col items-center justify-center text-center p-6 shadow-sm h-[180px]"
              >
                {card.icon}
                <div className="font-semibold text-[#1181F7] text-[17px] mt-2 mb-1">{card.title}</div>
                <div className="text-[#222] text-[13px] font-medium">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- SECTION 2 ---- */}
      <section className="w-full flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-r from-[#1F2A34] to-[#007EED]">
        <div className="max-w-[966px]">
          <div className="text-[28px] md:text-[40px] font-bold text-white mb-4 leading-tight">
            Ready to Transform Your Business?
          </div>
          <div className="text-[16px] md:text-[20px] text-white mb-6">
            Join over 150 successful companies that trust Zentrix Solutions for their IT needs
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="w-full md:w-[305px] h-[59px] bg-[#FFFFFF] hover:bg-[#e6e6e6] text-black font-bold text-[16px] rounded-[8px] px-6 py-3 transition">
              Start Your Project
            </button>
            <button className="w-full md:w-[275px] h-[59px] bg-[#33AFF9] hover:bg-[#28a4f0] text-white font-bold text-[16px] rounded-[8px] px-6 py-3 transition">
              Export Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
