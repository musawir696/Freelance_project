import React from "react";
import ProfileCarousel from "../../components/ProfileCarousel";
import ServiceCard from "../../components/ServiceCard";
import SimpleCarousel from "../../components/SimpleCarousel";
import ERP from "../../assets/ERP.png";
import DeviceSales from "../../assets/DeviceSales.png";
import Outsourcing from "../../assets/Outsourcing.png";
import SolutionIntegration from "../../assets/SolutionIntegration.png";
import TrainingIT from "../../assets/TrainingIT.png";
import ITSupport from "../../assets/ITSupport.png";


const profiles = [
  { name: "Jacob Jones", role: "IT Specialist in Kaloum" },
  { name: "Jacob Jones", role: "SAP Consultant in Kankan" },
  { name: "Jacob Jones", role: "SAP Consultant in Kankan" },
  { name: "Jacob Jones", role: "SAP Consultant in Kankan" },
  { name: "Jacob Jones", role: "SAP Consultant in Kankan" },
  { name: "Jacob Jones", role: "SAP Consultant in Kankan" },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer">
              For Companies
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Fuel Innovation and Digital</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transformation with Freelance-224
            </span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Comprehensive tech solutions for businesses and NGOs in Conakry and beyond
          </p>
        </div>

        {/* Carousel Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Technology Recruitment Services:</h2>
            <p className="text-gray-400 text-lg">
              Hire top-tier freelancers across Guinea's prefectures for your tech projects.
            </p>
          </div>
          <ProfileCarousel profiles={profiles} />
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceCard
            icon={
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
                <img src={ERP} alt="logo" className="w-6 h-6 object-contain" />
              </div>
            }
            title="ERP/SAP Solutions"
            description="Implement, optimize, and customize SAP/ERP systems for your business."
            buttonText="Explore ERP Services →"
          />

          <ServiceCard
            icon={
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
                <img src={DeviceSales} alt="logo" className="w-6 h-6 object-contain" />
              </div>
            }
            title="IT Support"
            description="Reliable IT support for hardware, software, and network issues."
            buttonText="Get IT Support →"
          />

          <ServiceCard
            icon={
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={Outsourcing} alt="logo" className="w-6 h-6 object-contain" />
              </div>
            }
            title="IT Solution Integration"
            description="Seamlessly integrate IT solutions to enhance business operations."
            buttonText="Integrate Now →"
          />

          <ServiceCard
            icon={
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={SolutionIntegration} alt="logo" className="w-6 h-6 object-contain" />
              </div>
            }
            title="Outsourcing With Freelance-224"
            description="Outsource IT tasks to our expert team for efficiency and cost savings."
            buttonText="Outsource Now →"
          />

          <ServiceCard
            icon={
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center overflow-hidden">
                <img src={TrainingIT} alt="logo" className="w-6 h-6 object-contain" />
              </div>
            }
            title="Device Sales & Rentals"
            description="Smartphone Sale"
            buttonText="Buy or Rent for Your Team →"
            additionalContent={
              <div className="space-y-1">
                <p className="text-green-400 font-semibold">4,928,000 GNF ($560)</p>
                <p className="text-gray-400 text-sm">
                  <span className="text-xs">Rental</span>{" "}
                  <span className="text-orange-400 font-semibold">8,800 GNF/hour ($1)</span>
                </p>
              </div>
            }
          />

          <ServiceCard
            icon={
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center overflow-hidden">
                <img src={ITSupport} alt="logo" className="w-6 h-6 object-contain" />
              </div>
            }
            title="Training For Teams"
            description="Upskill your team with custom training tailored to your business needs."
            buttonText="Train Your Team →"
          />

        </div>
      </div>
    </div>
  );
}
