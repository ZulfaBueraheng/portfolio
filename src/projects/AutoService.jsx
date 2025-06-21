import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import auto1 from "../assets/projects/auto-service/Home.png";
import auto2 from "../assets/projects/auto-service/History.png";
import auto3 from "../assets/projects/auto-service/Report.png";

const AutoService = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-1 
               hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <ChevronLeft size={20} />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-1 
               hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <ChevronRight size={20} />
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            ← Back to Portfolio
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">
            Auto Service Management System
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              prevArrow={<CustomPrevArrow />}
              nextArrow={<CustomNextArrow />}
            >
              <div>
                <img
                  src={auto1}
                  alt="Dashboard"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src={auto2}
                  alt="Repair Form"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src={auto3}
                  alt="Reports"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="h-45 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center mb-12">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Auto Service Management</h2>
            <p className="text-xl opacity-90">
              Web Application for Auto Repair Businesses
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Project Overview
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A comprehensive web application designed to streamline auto
                service operations. This system enables repair shops to
                efficiently manage customer data, track repair progress,
                generate detailed reports, and maintain seamless communication
                with customers through automated notifications.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Duration</h4>
                  <p className="text-gray-600">July 2023 - March 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Institution
                  </h4>
                  <p className="text-gray-600">Prince of Songkla University</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Repair Data Management
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Complete system for recording and tracking all repair
                        activities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Customer Notifications
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Automated LINE messaging for repair status updates
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Repair History
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Comprehensive access to all past repair records
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Report Generation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Detailed summary reports for business insights
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Team & Collaboration
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Team Composition
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Collaborated with one team member to develop this
                    comprehensive auto service management system. The project
                    required close coordination between frontend and backend
                    development, as well as UI/UX design implementation.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Development Approach
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Utilized agile development methodology with regular code
                    reviews and collaborative problem-solving sessions.
                    Implemented version control using Git for seamless code
                    integration and project management.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      • Full-stack development and system architecture design
                    </li>
                    <li>• API integration and database schema optimization</li>
                    <li>
                      • Responsive UI implementation and user experience design
                    </li>
                    <li>
                      • LINE Messaging API integration for customer
                      notifications
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Technical Implementation
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Frontend Development
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Built with React.js to create a dynamic and responsive user
                    interface. Implemented Material UI and Bootstrap for
                    consistent design patterns and enhanced user experience
                    across all devices.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Backend Architecture
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Developed using Node.js and Express.js for robust
                    server-side operations. MongoDB serves as the database
                    solution for flexible data storage and retrieval.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Integration & Notifications
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Integrated LINE Messaging API to provide real-time
                    notifications to customers about their vehicle repair
                    status, ensuring transparent communication throughout the
                    service process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Technologies Used
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      React.js
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      JavaScript
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      HTML
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      SCSS
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Express.js
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      MongoDB
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">UI/UX</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      Material UI
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      Bootstrap
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      Figma
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Integration
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      LINE Messaging API
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Project Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">8 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Team Size</span>
                  <span className="font-semibold">2 Members</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Type</span>
                  <span className="font-semibold">Full-Stack Web App</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Responsive</span>
                  <span className="font-semibold text-green-600">✓ Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoService;
