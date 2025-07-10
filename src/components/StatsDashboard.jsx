import React from "react";
import { Users, Shield, Award, TrendingUp } from "lucide-react";

// Import images
import chartImage from "../assets/Chart.png";
import illustrationImage from "../assets/illustration.png";
import testimonialImage from "../assets/Testimonial_image2.jpg";

const StatsDashboard = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Image */}
          <div className="relative">
            <div className="relative z-20 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
              <img
                src={testimonialImage}
                alt="Testimonial"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Illustration Card */}
            <div className="absolute -top-4 -right-4 lg:-right-8 z-30 bg-white rounded-xl shadow-lg p-4 w-32 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-gray-800">Illustration</h4>
                <img src={illustrationImage} alt="illustration" className="w-10 h-10 mt-1" />
                <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md transition-colors mt-2">
                  View All
                </button>
              </div>
            </div>

            {/* User Avatars */}
            <div className="absolute top-1/2 -right-6 lg:-right-12 z-30 bg-white rounded-xl shadow-lg p-3 transform -translate-y-1/2">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">J</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">M</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Preview */}
            <div className="absolute -bottom-6 -left-4 lg:-left-8 z-30 bg-white rounded-lg shadow-lg p-3 w-24 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <img src={chartImage} alt="Chart" className="w-full h-auto" />
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="space-y-8 lg:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-8 h-8 text-white/80 mr-2" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  96,327<span className="text-2xl">+</span>
                </div>
                <p className="text-white/80 text-sm lg:text-base">Daily Active Users</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Shield className="w-8 h-8 text-white/80 mr-2" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  20<span className="text-2xl">+</span>
                </div>
                <p className="text-white/80 text-sm lg:text-base">
                  Trusted by 20+ NGOs in Guinea for tech and training solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <TrendingUp className="w-8 h-8 text-white/80 mr-2" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  100<span className="text-2xl">+</span>
                </div>
                <p className="text-white/80 text-sm lg:text-base">Freelancers in Conakry</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Shield className="w-8 h-8 text-white/80 mr-2" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">Powered By</div>
                <div className="text-3xl lg:text-4xl font-bold text-white">TLS1.3</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-16 lg:mt-24 flex justify-center space-x-8 opacity-20">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
