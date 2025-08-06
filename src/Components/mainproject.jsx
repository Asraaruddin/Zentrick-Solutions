import React from "react";

// ICONS for Project Impact section
import peopleIcon from "../assets/ion_people-outline.png";
import graphIcon from "../assets/graph-arrow-.png";
import robotIcon from "../assets/robot-light.png";
import cartIcon from "../assets/cart .png";

const impactMetrics = [
  { icon: peopleIcon, value: "100,000+", label: "Active Users" },
  { icon: graphIcon, value: "$3.2B+", label: "Assets Managed" },
  { icon: robotIcon, value: "2M+", label: "AI Interactions" },
  { icon: cartIcon, value: "25,000+", label: "Transactions" },
];

const projectData = [
  {
    title: "Real Estate Loan–Mortgage Platform",
    status: "Production",
    description:
      "Comprehensive digital platform for mortgage lending with automated underwriting, document verification, and real-time loan tracking. Features include AI-powered risk assessment and seamless integration with credit bureaus.",
    features: [
      "Automated loan underwriting",
      "Real-time credit monitoring",
      "Document digitization",
    ],
    technologies: ["React", "NodeJS", "MongoDB"],
    metrics: [
      { value: "50,000+", label: "Users" },
      { value: "80% Faster", label: "Processing Time" },
      { value: "$2.5B+", label: "Loans" },
    ],
    statusColor: "#FFB800",
    buttons: ["More Details", "View Live Demo"],
  },
  {
    title: "Digital Marketing Co-registration Engine",
    status: "Active",
    description:
      "Advanced lead generation and co-registration platform that matches potential customers with relevant financial products. Utilizes machine learning for optimal lead scoring and qualification.",
    features: [
      "Real-time lead matching",
      "Multi-channel integration",
      "Advanced analytics",
    ],
    technologies: ["Python", "React", "Redis"],
    metrics: [
      { value: "1M+ monthly", label: "Leads" },
      { value: "200+ integrated", label: "Partners" },
      { value: "35% higher", label: "Conversion" },
    ],
    statusColor: "#80FF66",
    buttons: ["More Details", "View Live Demo"],
  },
  {
    title: "Wealth Management & Finance Platform",
    status: "Production",
    description:
      "Sophisticated wealth management system offering portfolio optimization, risk analysis, and automated investment strategies. Includes real-time market data integration and personalized financial planning tools.",
    features: [
      "Automated loan underwriting",
      "Real-time credit monitoring",
      "Document digitization",
    ],
    technologies: ["Python", "React", "Redis"],
    metrics: [
      { value: "50,000+", label: "Users" },
      { value: "80% Faster", label: "Processing Time" },
      { value: "$2.5B+", label: "Loans" },
    ],
    statusColor: "#FFB800",
    buttons: ["More Details", "View Live Demo"],
  },
  {
    title: "E-commerce Real Estate Marketplace",
    status: "Production",
    description:
      "Full-featured e-commerce platform for buying and selling real estate properties, featuring virtual tours, mortgage calculators, and integrated financing options. Supports both residential and commercial properties.",
    features: [
      "Automated loan underwriting",
      "Real-time credit monitoring",
      "Document digitization",
    ],
    technologies: ["React", "NodeJS", "Redis"],
    metrics: [
      { value: "50,000+", label: "Users" },
      { value: "80% Faster", label: "Processing Time" },
      { value: "$2.5B+", label: "Loans" },
    ],
    statusColor: "#FFB800",
    buttons: ["More Details", "View Live Demo"],
  },
  {
    title: "AI Financial Chatbot",
    status: "Production",
    description:
      "Intelligent conversational AI that provides personalized financial advice, loan guidance, and real estate market insights. Uses natural language processing to understand complex financial queries.",
    features: [
      "Automated loan underwriting",
      "Real-time credit monitoring",
      "Document digitization",
    ],
    technologies: ["Python", "React", "Redis"],
    metrics: [
      { value: "50,000+", label: "Users" },
      { value: "80% Faster", label: "Processing Time" },
      { value: "$2.5B+", label: "Loans" },
    ],
    statusColor: "#FFB800",
    buttons: ["More Details", "View Live Demo"],
  },
  {
    title: "AI Financial Advisor",
    status: "Development",
    description:
      "Intelligent conversational AI that provides personalized financial advice, loan guidance, and real estate market insights. Uses natural language processing to understand complex financial queries.",
    features: [
      "Automated loan underwriting",
      "Real-time credit monitoring",
      "Document digitization",
    ],
    technologies: ["Python", "React", "Redis"],
    metrics: [
      { value: "50,000+", label: "Users" },
      { value: "80% Faster", label: "Processing Time" },
      { value: "$2.5B+", label: "Loans" },
    ],
    statusColor: "#B0BEC5",
    buttons: ["More Details", "View Live Demo"],
  },
];

const statusColors = {
  Production: "bg-[#FFB800] text-[#0A4076] border-[#FFB800]",
  Active: "bg-[#80FF66] text-[#0A4076] border-[#80FF66]",
  Development: "bg-[#E0E0E0] text-[#0A4076] border-[#E0E0E0]",
};

function ProjectsSection() {
  return (
    <div className="w-full">
      {/* Projects Hero */}
      <section
        className="w-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
          height: 304,
          minHeight: 220,
        }}
      >
        <div className="w-full flex flex-col items-center justify-center text-center px-4">
          <h1
            className="text-white font-poppins font-semibold"
            style={{
              fontSize: 56,
              lineHeight: "84px",
              maxWidth: 346,
              margin: "0 auto",
            }}
          >
            Our Projects
          </h1>
          <p
            className="mt-4 text-white opacity-90 font-poppins"
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "120%",
              maxWidth: 533,
              margin: "0 auto",
            }}
          >
            Explore our comprehensive portfolio of innovative solutions in real estate, finance, and technology.
          </p>
        </div>
      </section>

      {/* Project Portfolio */}
      <section className="w-full px-2 py-16 bg-white flex flex-col items-center">
        <h2
          className="font-poppins font-medium text-black text-center"
          style={{ fontSize: 40, lineHeight: "68px", maxWidth: 315, margin: "0 auto" }}
        >
          Project Portfolio
        </h2>
        <p
          className="font-poppins font-normal text-[16px] text-black text-center mt-1 mb-8"
          style={{ maxWidth: 395, lineHeight: "100%" }}
        >
          Cutting-edge solutions across multiple industries
        </p>
        <div className="w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectData.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-[#0A4076] rounded-[16px] p-5 flex flex-col shadow transition hover:shadow-lg"
              style={{ minWidth: 320, maxWidth: 661, height: 431, gap: 20 }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-poppins font-semibold text-lg text-[#0A4076]">
                  {p.title}
                </span>
                <span
                  className="ml-3 px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    background: p.statusColor,
                    borderColor: p.statusColor,
                    color: p.status === "Active" ? "#185A00" : "#0A4076",
                  }}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-[#777777] text-[14px] font-poppins font-normal mb-2">
                {p.description}
              </p>
              <div className="flex flex-row gap-7 mb-3">
                <div>
                  <div className="font-poppins font-semibold text-[#0A4076] mb-1">
                    Key Features
                  </div>
                  <ul className="list-disc pl-5 text-[14px] font-poppins text-black">
                    {p.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-poppins font-semibold text-[#0A4076] mb-1">
                    Technologies
                  </div>
                  <ul className="list-disc pl-5 text-[14px] font-poppins text-[#454545] marker:text-[#0A4076]">
                    {p.technologies.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-auto mb-5">
                {p.metrics.map((met, im) => (
                  <div key={im} className="flex flex-col items-center">
                    <span className="font-poppins text-[#2A2A2A] font-bold text-[18px]">
                      {met.value}
                    </span>
                    <span className="font-poppins text-[#777777] text-sm">{met.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-row justify-end gap-2 mt-auto">
                {p.buttons.map((b, i) => (
                  <button
                    key={i}
                    className={`font-poppins rounded-md px-5 py-2 text-[15px] font-semibold border ${
                      i === 1
                        ? 'text-white border-none'
                        : 'border-[#0A4076] text-[#0A4076] bg-white hover:bg-[#f5fafd]'
                    }`}
                    style={
                      i === 1
                        ? {
                            background:
                              "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
                          }
                        : {}
                    }
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* Project Impact Section */}
      <section
        className="w-full flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(135.49deg, #0D4883 28.08%, #1B6EC1 79.66%)",
          minHeight: 258,
          height: 344,
          paddingTop: 48,
          paddingBottom: 48,
        }}
      >
        <h2
          className="font-poppins font-semibold text-white text-center"
          style={{
            fontSize: 40,
            lineHeight: "64px",
            letterSpacing: 0,
          }}
        >
          Project Impact
        </h2>
        <p
          className="mt-1 font-poppins font-normal text-white opacity-90 text-center"
          style={{
            fontSize: 16,
            lineHeight: "100%",
            letterSpacing: 0,
            maxWidth: 400,
          }}
        >
          Measurable results across our project portfolio
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-14 mt-10 w-full px-6 max-w-[1440px]">
          {impactMetrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center text-center min-w-[120px]">
              <div
                className="mb-3 bg-[#EEBD2B] rounded-full flex items-center justify-center"
                style={{ width: 56, height: 56 }}
              >
                <img src={m.icon} alt={m.label} className="w-8 h-8 object-contain" />
              </div>
              <div className="font-poppins text-white text-[24px] leading-[100%] text-center font-semibold mb-1">
                {m.value}
              </div>
              <div className="font-poppins font-normal text-[#EBDD8B] text-[16px] leading-[100%] text-center ">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Interested in Our Solutions? CTA */}
      <section className="w-full min-h-[318px] flex items-center justify-center bg-white">
        <div className="w-full flex flex-col items-center">
          <h2
            className="font-poppins font-medium text-[48px] leading-[68px] text-black text-center mb-2"
            style={{ width: 661 }}
          >
            Interested in Our Solutions?
          </h2>
          <p className="font-poppins text-base font-normal text-black leading-[100%] text-center max-w-[527px] mb-8">
            Learn more about how our innovative projects can benefit your business or explore partnership opportunities.
          </p>
          <div className="flex gap-3 flex-col sm:flex-row">
            <button
              className="w-[180px] h-[48px] rounded-[12px] px-5 py-3 bg-[#0A4076] font-poppins font-semibold text-[16px] leading-[100%] text-white transition hover:brightness-110"
            >
              Schedule Demo
            </button>
            <button
              className="w-[200px] h-[48px] rounded-[12px] px-5 py-3 border border-[#0A4076] bg-white font-poppins font-semibold text-[16px] leading-[100%] text-[#0A4076] transition hover:bg-blue-50"
            >
              Partnership Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsSection;
