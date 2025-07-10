import React from "react";
import clientImage from "../assets/client_image.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Hired 5 IT specialists in a week!",
      company: "Conakry Companies",
      role: "Local Startup",
      avatar: clientImage,
      quoteColor: "text-red-500",
    },
    {
      id: 2,
      quote: "The platform helped us scale quickly.",
      company: "Digital Hub Africa",
      role: "Tech Company",
      avatar: clientImage,
      quoteColor: "text-yellow-500",
    },
    {
      id: 3,
      quote: "We found amazing freelance talent.",
      company: "Startup Valley",
      role: "Founder",
      avatar: clientImage,
      quoteColor: "text-green-500",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full text-sm font-medium bg-blue-500 text-white">
            Our Testimonials
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            What our clients say
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            about solutions
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center text-center px-4">
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${testimonial.quoteColor}`}>
                "
              </div>
              <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-900 mb-6 sm:mb-8 leading-relaxed max-w-sm">
                {testimonial.quote}
              </p>
              <div className="mb-3 sm:mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.company} representative`}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                  {testimonial.company}
                </h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === 0 ? "bg-blue-500 scale-110" : "bg-gray-300 hover:bg-gray-400 hover:scale-105"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
