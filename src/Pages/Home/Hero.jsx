import React, { useState, useEffect } from "react";
import { FaMobileAlt, FaUsers, FaTools, FaDesktop, FaGraduationCap, FaArrowRight, FaClock } from "react-icons/fa";

export default function TechServicesLanding() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 1,
    hours: 19,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">Save 20%</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Faster solutions</span>
        </div>

        <div className="relative mb-8">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-200 rounded-full opacity-60"></div>
          <div className="absolute -top-2 right-20 w-4 h-4 bg-purple-500 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-orange-400 rounded-full"></div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Shop. Book.{" "}
            <span className="relative">
              <span className="bg-blue-200 px-4 py-2 rounded-full border-2 border-blue-400">Hire.</span>
            </span>{" "}
            Rent. Transform.
          </h1>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          - Your Tech Partner in <span className="text-red-600">Guinea</span>
        </h2>

        <p className="text-xl text-gray-600 mb-8">Limited-Time Offer: Save 20% Until May 16, 2025!</p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center justify-center">
            <FaMobileAlt className="mr-2" />
            Shop Smartphones
            <FaArrowRight className="ml-2" />
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center justify-center">
            <FaUsers className="mr-2" />
            Hire Freelancers
            <FaArrowRight className="ml-2" />
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center justify-center">
            <FaTools className="mr-2" />
            Explore Tech Services
            <FaArrowRight className="ml-2" />
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center justify-center">
            <FaDesktop className="mr-2" />
            Rent Devices
            <FaArrowRight className="ml-2" />
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center justify-center">
            <FaGraduationCap className="mr-2" />
            Start Training
            <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaClock className="w-5 h-5 text-gray-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              {timeRemaining.days} day, {timeRemaining.hours} hours remaining
            </h3>
          </div>
          <p className="text-gray-600">from 05:55 PM CEST, May 14, 2025, to midnight May 16, 2025</p>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-full px-0 py-8">
          <div className="grid grid-cols-1 gap-8 items-center">
            <div className="w-full">
              <div className="p-8 relative overflow-hidden h-auto lg:h-[360px] leading-7">
                {/* Ad badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">Ad</span>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center h-full">
                  {/* Left side - 2 images side by side */}
                  <div className="flex flex-row items-center gap-0">
                    <img src="/src/assets/iphone.png" alt="Promo 1" className="w-32 h-32 rounded-xl object-cover" />
                    <img src="/src/assets/phone.png" alt="Promo 2" className="w-32 h-32 rounded-xl object-cover" />
                  </div>

                  {/* Center - Main Content */}
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
                      Get 20% Off Smartphones &<br />
                      Rentals – Visit Our Shop!
                    </h3>
                    <button className="bg-transparent text-white border border-white hover:bg-white/20 px-6 py-3 text-md rounded-full font-semibold flex items-center justify-center transition">
                      Explore the Platform Now
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>

                  {/* Right side - flush right */}
                  <div className="flex justify-end ml-auto">
                    <img src="/src/assets/performance.png" alt="Preview" className="w-40 h-40 rounded-xl object-cover" />
                  </div>
                </div>

                {/* Optional Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white/10 rounded-full" />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}