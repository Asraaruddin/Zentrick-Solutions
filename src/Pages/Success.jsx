import React from 'react';
import { ArrowRight } from 'lucide-react';
import Footer from '../Components/Footer';

const caseStudies = [
  {
    title: 'FinanceFlow Digital Transformation',
    domain: 'Financial Issues',
    challenge: 'Legacy systems causing inefficiencies and security concerns',
    results: [
      '50% improvement in processing speed',
      '99.9% uptime achieved',
      'Enhanced security compliance',
      '30% reduction in operational costs',
    ],
    duration: '8 months',
    team: '12 specialists',
    solution:
      'Complete digital transformation with modern cloud infrastructure',
  },
  {
    title: 'RetailRevamp Cloud Migration',
    domain: 'Retail Tech',
    challenge: 'Outdated infrastructure slowing down POS systems',
    results: [
      '60% faster transaction time',
      '100% cloud adoption',
      'Improved customer satisfaction',
      '25% reduction in IT costs',
    ],
    duration: '6 months',
    team: '10 specialists',
    solution: 'Migrated entire system to a scalable AWS infrastructure',
  },
  {
    title: 'HealthSync Data Integration',
    domain: 'Healthcare',
    challenge: 'Disparate data sources across systems',
    results: [
      'Unified patient records',
      'HIPAA-compliant integration',
      'Reduced errors by 40%',
      'Real-time access for providers',
    ],
    duration: '9 months',
    team: '15 specialists',
    solution:
      'Built a custom API gateway and data lake architecture to unify access',
  },
];

const Success = () => {
  return (
    <section className="w-full bg-white px-4 md:px-10 lg:px-16 py-12 md:py-16">
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-14">
        {[
          { value: '98%', label: 'Client Satisfaction Rate' },
          { value: '150+', label: 'Successful Projects' },
          { value: '40%', label: 'Average Cost Savings' },
          { value: '99.9%', label: 'System Uptime' },
        ].map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-700">{stat.value}</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What Our Clients Say</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-2 text-sm md:text-base">
          Don't just take our word for it. Here's what our clients have to say about their experience with Zentrix Solutions.
        </p>
      </div>

      {/* Testimonials */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="flex gap-4 px-2">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="w-[250px] sm:w-[280px] bg-gray-100 p-5 rounded-lg shadow-md flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  "Zentrix Solutions transformed our entire IT infrastructure. Their cloud migration reduced our costs by 40% while improving performance. The team's expertise and dedication exceeded our expectations."
                </p>
                <div className="flex space-x-1 text-yellow-400 text-lg">
                  {Array(5).fill('⭐️').map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-2 mt-3">
                <h4 className="font-bold text-gray-800 text-sm">Jennifer Thompson</h4>
                <p className="text-sm text-[#33AFF9]">CTO, TechCorp Industries</p>
                <p className="text-xs text-gray-500 italic">Cloud Migration & Infrastructure Modernization</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="text-center mb-10 mt-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Detailed Case Studies</h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-2 text-sm md:text-base">
          Dive deeper into how we've solved complex challenges for our clients
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        {caseStudies.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[1000px] border border-[#AEAEAE] rounded-lg shadow p-5 md:p-6"
          >
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {/* Left */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-[#000000]">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.domain}</span>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">Challenge:</h4>
                  <p className="text-sm text-gray-700">{item.challenge}</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">Solution:</h4>
                  <p className="text-sm text-gray-700">{item.solution}</p>
                </div>
              </div>

              {/* Right */}
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-gray-800 mb-2">Result:</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {item.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
                <div className="text-sm text-gray-600 mt-4">
                  ⏳ Duration: <strong>{item.duration}</strong>
                  <br />
                  👥 Team: <strong>{item.team}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div
        className="w-full py-12 md:py-16 px-4 text-center text-white mt-16"
        style={{ background: 'linear-gradient(97.06deg, #1F2A34 0%, #007EED 100%)' }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-sm md:text-lg mb-8 max-w-2xl mx-auto">
          Join over 150 successful companies that trust Zentrix Solutions for their IT needs
        </p>
        <button
          className="inline-flex items-center gap-3 bg-white text-[#123450] text-sm md:text-lg font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Start Your Project
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#123450]" strokeWidth={2} />
        </button>
      </div>

      <Footer />
    </section>
  );
};

export default Success;
