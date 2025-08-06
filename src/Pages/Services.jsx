import { Cloud, ShieldCheck, Code2, BarChart3, Smartphone, Briefcase, ArrowRight, Zap } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const cardData = [
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    icon: <Cloud className="text-white w-8 h-8" />,
    features: ["Cloud Migration", "Infrastructure Setup", "Cost Optimization", "24/7 Support"]
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our advanced cybersecurity solutions.",
    icon: <ShieldCheck className="text-white w-8 h-8" />,
    features: ["Threat Detection", "Compliance", "Data Encryption", "Incident Response"]
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions to meet your unique business requirements.",
    icon: <Code2 className="text-white w-8 h-8" />,
    features: ["Web Apps", "APIs & Integrations", "Enterprise Solutions", "Agile Development"]
  },
  {
    title: "Data Analytics",
    description: "Unlock insights and make data-driven decisions with our analytics tools.",
    icon: <BarChart3 className="text-white w-8 h-8" />,
    features: ["Business Intelligence", "Real-time Dashboards", "Data Warehousing", "Predictive Analytics"]
  },
  {
    title: "Mobile Solutions",
    description: "Build responsive and high-performance mobile apps for iOS and Android.",
    icon: <Smartphone className="text-white w-8 h-8" />,
    features: ["Cross-platform Apps", "Native Development", "UI/UX Design", "App Store Deployment"]
  },
  {
    title: "IT Consulting",
    description: "Strategic IT guidance to help your business thrive in the digital age.",
    icon: <Briefcase className="text-white w-8 h-8" />,
    features: ["Tech Strategy", "Digital Transformation", "System Integration", "Risk Assessment"]
  }
];

export default function Services() {
  return (
    <>
      <div
        className="h-[312px] w-full flex flex-col items-center justify-center text-center px-4 text-white font-sans"
        style={{
          background: 'linear-gradient(97.06deg, #1F2A34 0%, #007EED 100%)',
        }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Our IT Solutions
        </h2>
        <p className="text-[24px] sm:text-base md:text-lg font-medium max-w-2xl">
          Comprehensive technology services designed to drive your business forward
        </p>
      </div>

      <div className="mx-4 md:mx-12 my-12">
        <div className="flex flex-wrap justify-center gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-[342px] p-6 flex flex-col items-center justify-between rounded-lg"
              style={{ background: '#F0F0F033' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: 'linear-gradient(180deg, #008DF4 0%, #01A6FB 100%)',
                }}
              >
                {card.icon}
              </div>

              <h3 className="text-[24px] font-bold mb-2 text-center text-black">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 text-center">
                {card.description}
              </p>
              <ul className="text-gray-700 text-sm mb-4 list-disc list-inside space-y-1 self-center">
                {card.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button
                className="mt-auto flex justify-center items-center gap-2 px-4 py-2 bg-[#33AFF9] text-white font-semibold rounded hover:opacity-90 transition w-full text-center"
              >
                Learn more <ArrowRight className="w-10 h-4" strokeWidth={2} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-white py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-8 mx-auto">
          Join over 150 successful companies that trust Zentrix Solutions for their IT needs
        </p>
        <button
          className="inline-flex items-center gap-3 text-white text-base md:text-lg font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
          style={{
            background: 'linear-gradient(91.93deg, #1D2D3B 0.03%, #027AE4 99.7%)',
          }}
        >
          Start Your Project
          <ArrowRight className="w-6 h-6" strokeWidth={2} />
        </button>
      </div>

      <footer className="bg-[#1F2933] text-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="rounded-[8px] shadow-lg flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  padding: 8,
                  background: "linear-gradient(180deg, #008DF4 0%, #01A6FB 100%)",
                  boxShadow: "0px 4px 4px 0px #0000001A",
                }}
              >
                <Zap color="#fff" size={32} strokeWidth={2.5} />
              </div>
              <h2 className="text-xl font-bold text-white">Zentrix Solutions</h2>
            </div>
            <p className="text-sm text-gray-300">
              Empowering businesses through innovative IT solutions. We deliver cutting-edge technology
              services that drive growth and efficiency.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <FaFacebook size={22} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Cyber Security</a></li>
              <li><a href="#" className="hover:text-white transition">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition">Custom Development</a></li>
              <li><a href="#" className="hover:text-white transition">Data Analytics</a></li>
              <li><a href="#" className="hover:text-white transition">Cloud Computing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📧 info@zentrixsolutions.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>🏢 123 Tech Street, Digital City, TC 12345</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2024 Zentrix Solutions. All rights reserved. |
          <a href="#" className="mx-2 hover:text-white transition">Privacy Policy</a> |
          <a href="#" className="ml-2 hover:text-white transition">Terms of Service</a>
        </div>
      </footer>
    </>
  );
}
