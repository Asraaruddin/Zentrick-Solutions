import React from 'react'
import { Target, User } from 'lucide-react'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
      {/* WHO WE ARE */}
      <div
        className="w-full flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20 text-white"
        style={{
          background: 'linear-gradient(97.06deg, #1F2A34 0%, #007EED 100%)',
        }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Who We Are
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl font-medium">
          A team of passionate technologists dedicated to transforming businesses through innovative IT solutions
        </p>
      </div>

      {/* OUR STORY */}
      <div className="w-full py-12 px-4 md:px-16 text-[#1F2933]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-20">
          {/* Left Column */}
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-base md:text-lg mb-4">
              Founded in 2014, Zentrix Solutions emerged from a simple belief: that technology should empower businesses, not complicate them...
            </p>
            <p className="text-base md:text-lg mb-4">
              Over the years, we've helped hundreds of businesses navigate their digital transformation journeys...
            </p>
            <p className="text-base md:text-lg">
              Today, we're proud to be recognized as a trusted partner for businesses seeking innovative, reliable, and scalable IT solutions.
            </p>
          </div>

          {/* Right Stats */}
          <div className="flex flex-col gap-4 w-full md:max-w-[220px]">
            {[
              ['500+', 'Projects Completed'],
              ['24/7', 'Support Available'],
              ['99.9%', 'Uptime Guaranteed'],
              ['150+', 'Happy Clients'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="p-4 rounded-lg text-center"
                style={{ background: '#064DC70A' }}
              >
                <h3 className="text-xl font-bold mb-1 text-[#01A6FB]">{value}</h3>
                <p className="text-sm font-medium text-[#01A6FB]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR FOUNDATION */}
      <div className="w-full py-12 px-4 md:px-16 bg-white text-[#1F2933]">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Foundation</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our work and define our commitment to excellence
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-6xl mx-auto">
          {[
            {
              title: "Mission",
              text: "To empower businesses through innovative IT solutions that drive growth, efficiency, and digital transformation.",
            },
            {
              title: "Vision",
              text: "To be the leading IT solutions provider, recognized for excellence, innovation, and transformative business impact.",
            },
            {
              title: "Values",
              text: "Integrity, innovation, customer-centricity, and continuous learning guide everything we do.",
            },
          ].map(({ title, text }) => (
            <div key={title} className="flex-1 min-w-0 p-6 rounded-lg text-center">
              <div className="mb-4 flex justify-center">
                <Target className="w-10 h-10 text-[#027AE4]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MEET OUR LEADERSHIP */}
      <div className="w-full py-12 px-4 md:px-16 text-[#1F2933] bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced professionals driving innovation and excellence in every project
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Sarah Johnson",
              role: "CEO & Founder",
              desc: "15+ years in enterprise IT solutions with expertise in digital transformation strategies.",
            },
            {
              name: "Michael Chen",
              role: "CTO",
              desc: "Technology visionary with deep expertise in cloud architecture and emerging technologies.",
            },
            {
              name: "Emily Rodriguez",
              role: "Head of Operations",
              desc: "Operations expert ensuring seamless project delivery and client satisfaction.",
            },
            {
              name: "David Kumar",
              role: "Lead Developer",
              desc: "Full-stack developer with passion for creating scalable, innovative software solutions.",
            },
          ].map(({ name, role, desc }) => (
            <div key={name} className="p-6 rounded-lg text-center bg-white shadow-sm border border-gray-100">
              <div className="mb-4 flex justify-center">
                <User className="w-10 h-10 text-[#027AE4]" />
              </div>
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-lg text-[#008DF4] font-semibold mb-1">{role}</p>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE ZENTRIX */}
      <div
        className="w-full py-16 px-4 md:px-16 text-white"
        style={{
          background: "linear-gradient(97.06deg, #1F2A34 0%, #007EED 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Zentrix Solutions?
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-6xl mx-auto">
          {[
            {
              title: "Innovation First",
              desc: "We leverage cutting-edge technologies to solve complex business challenges.",
            },
            {
              title: "Proven Expertise",
              desc: "Our team brings deep industry knowledge and technical excellence.",
            },
            {
              title: "Client-Centric",
              desc: "Your success is our priority. We build lasting partnerships.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="flex-1 min-w-[250px] p-6 rounded-lg bg-white/10 backdrop-blur-sm text-white text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About
