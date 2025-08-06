import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Footer from '../Components/Footer';

const contactMethods = [
  {
    Icon: MapPin,
    label: 'Office Location',
    value: '123 Tech Street, Digital City, TC 12345',
    note: 'Visit us at our headquarters',
  },
  {
    Icon: Mail,
    label: 'Email Address',
    value: 'info@zentrixsolutions.com',
    note: 'Send us an email anytime',
  },
  {
    Icon: Phone,
    label: 'Phone Number',
    value: '+1 (555) 123-4567',
    note: 'Mon–Fri from 8am to 6pm EST',
  },
  {
    Icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Friday: 8:00 AM – 6:00 PM',
    note: 'Weekend support available for emergencies',
  },
];

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full py-16 px-6 md:px-20 text-white" style={{ background: 'linear-gradient(97.06deg, #1F2A34 0%, #007EED 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Talk IT</h2>
          <p className="text-base md:text-lg">
            Ready to transform your business? Get in touch with our experts for a free consultation.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full px-6 md:px-20 bg-white">

        {/* Grid Layout for Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto py-16">

          {/* Left: Contact Form */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-black">Get Free Consultation</h3>
            <p className="text-sm text-gray-600 mb-6">
              Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements.
            </p>

            {/* Bordered Contact Form */}
            <div className="border-[2.4px] border-[#20202066] p-6 rounded-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name*" className="border border-gray-300 p-3 rounded w-full" />
                  <input type="email" placeholder="Email Address*" className="border border-gray-300 p-3 rounded w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Company" className="border border-gray-300 p-3 rounded w-full" />
                  <input type="text" placeholder="Phone Number" className="border border-gray-300 p-3 rounded w-full" />
                </div>
                <select className="border border-gray-300 p-3 rounded w-full">
                  <option>Select Service</option>
                  <option>Web Development</option>
                  <option>Cloud Solutions</option>
                  <option>IT Consulting</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Project Details*"
                  className="border border-gray-300 p-3 rounded w-full"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#007EED] text-white py-3 px-6 rounded w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-black">Contact Information</h3>
            <p className="text-sm font-semibold text-gray-600 mb-6">
              Have questions? We're here to help. Reach out to us through any of the following channels.
            </p>

            <div className="space-y-4">
              {contactMethods.map(({ Icon, label, value, note }, index) => (
                <div key={index} className="border border-[#20202099] p-5 rounded-lg bg-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="text-[#007EED]" size={20} />
                    <h4 className="text-md font-semibold text-[#1F2A34]">{label}</h4>
                  </div>
                  <p className="text-sm text-gray-700">{value}</p>
                  {note && <p className="text-sm text-gray-500">{note}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Full-width Why Contact Us Section */}
      <div className="w-full mx-auto py-12 px-6 md:px-20 mb-10 border border-[#20202099]" style={{ background: 'linear-gradient(97.06deg, #1F2A34 0%, #007EED 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold text-white mb-6">Why Contact Us?</h4>
          <ul className="list-disc list-inside text-base text-white font-medium space-y-2 inline-block text-left">
            <li>Free initial consultation</li>
            <li>24-hour response guarantee</li>
            <li>Custom solution proposals</li>
            <li>No obligation quotes</li>
          </ul>
        </div>
      </div>
      {/* Call-to-Action Section */}
      <div className="w-full py-12 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-[#1F2A34] mb-4">Prefer to Talk Directly?</h3>
          <p className="text-xl text-gray-700 mb-8">Schedule a call with one of our IT experts</p>
          <button className="text-white font-medium text-sm px-6 py-3 rounded-xl"
            style={{
              background: "linear-gradient(91.93deg, #1D2D3B 0.03%, #027AE4 99.7%)"
            }}>
            Schedule for a call
          </button>
        </div>
      </div>
<Footer/>
    </>
  );
};

export default ContactPage;
