import React from "react";
import heroBG from "../assets/herobg.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative w-full flex items-center justify-center min-h-[380px] py-8 md:py-16"
      style={{ minHeight: 380 }}
    >
      {/* --- Background --- */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={heroBG}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.8 }}
        />
      </div>
      {/* --- Content Frame --- */}
      <div
        className="flex flex-col items-center justify-center
          w-full
          px-4 sm:px-8 md:px-12
          py-6 sm:py-10 md:py-14
          gap-7 sm:gap-8 md:gap-12
          
          max-w-[1142px]
          "
        style={{
          minHeight: 350,
          backdropFilter: 'blur(0.5px)',
        }}
      >
        {/* -- Main Heading -- */}
        <h1 className="
          font-sans font-bold tracking-[-.02em] text-center mb-2
          text-white
          text-[2.2rem] sm:text-[3rem] md:text-[68px] lg:text-[80px]
          leading-tight md:leading-[1.07] lg:leading-[88px]
        ">
          <span className="text-white">Empowering IT.</span>
          <br />
          <span className="bg-gradient-to-b from-white to-[#ABEDFD] bg-clip-text text-transparent">
            Enabling Growth.
          </span>
        </h1>
        {/* -- Subheading -- */}
        <p className="
          font-sans font-bold text-[16px] sm:text-[18px] md:text-[20px] text-center text-white mb-4 max-w-[700px] sm:max-w-[760px] mx-auto leading-snug
        ">
          Transform your business with innovative IT solutions that drive efficiency, security, and growth. Partner with Zentrix Solutions for your digital transformation journey.
        </p>
        {/* -- Buttons Row -- */}
      <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-3 mt-4">
  <button
    className="w-full sm:w-[220px] max-w-[290px] h-[50px] sm:h-[59px] bg-white text-[#062640] font-sans font-bold text-[15px] sm:text-[16px] rounded-[8px] shadow transition hover:bg-gray-100"
    style={{ padding: "14px 0" }}
  >
    Get Free Consultation
  </button>
  <button
    className="w-full sm:w-[220px] max-w-[290px] h-[50px] sm:h-[59px] bg-[#33AFF9] text-white font-sans font-bold text-[15px] sm:text-[16px] rounded-[8px] transition hover:brightness-110"
    style={{ padding: "14px 0" }}
  >
    Export Services
  </button>
</div>


      </div>
    </section>
  );
}
