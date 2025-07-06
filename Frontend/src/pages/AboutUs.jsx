import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/common/PageTransition";
import DawudImage from "../assets/Dawud.jpg";
import SaadImage from "../assets/Saad.png";
import ShahzilImage from "../assets/Shahzil.jpg";

const AboutUs = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Dawud Khan",
      role: "Backend Developer",
      bio: "Worked on scrapping and database management.",
      image: DawudImage,
    },
    {
      name: "Muhammad Saad Hussain",
      role: "Full Stack",
      bio: "Focused on the analysis report generation and formatting.",
      image: SaadImage,
    },

    {
      name: "Shahzil Asif",
      role: "Frontend Developer",
      bio: "Worked on UI development.",
      image: ShahzilImage,
    },
  ];

  // Company milestones
  const milestones = [
    {
      year: "Feb",
      title: "Idea Conception",
      description:
        "Amazon Product Synthesis was founded with the vision of providing data-driven insights for e-commerce businesses.",
    },
    {
      year: "March",
      title: "Scraper Development",
      description:
        "Developed a robust web scraper to gather product data from Amazon.",
    },
    {
      year: "April",
      title: "RAG Implementation",
      description:
        "Implemented Retrieval-Augmented Generation (RAG) for enhanced data analysis.",
    },
    {
      year: "May",
      title: "Basic Frontend",
      description:
        "Launched the initial version of our web application with basic features.",
    },
    {
      year: "May",
      title: "Advanced UI/UX",
      description:
        "Upgraded the user interface and experience based on user feedback.",
    },
  ];
  return (
    <PageTransition>
      {" "}
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-700 to-primary-900 rounded-xl overflow-hidden shadow-xl mb-12">
          <div className="px-8 py-20 text-center relative">
            <div className="absolute inset-0 opacity-10 bg-pattern"></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About Amazon Product Synthesis
              </h1>
              <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
                We help businesses make data-driven decisions with advanced
                AI-powered product analysis
              </p>
            </div>
          </div>
        </div>
        {/* Our Mission */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our mission is to democratize access to advanced product
              analytics, enabling businesses of all sizes to make informed
              decisions based on comprehensive market insights.
            </p>
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 border-t-4 border-primary-500 hover:shadow-lg">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                Innovative Analysis
              </h3>
              <p className="text-gray-600 text-center">
                We combine cutting-edge AI with deep e-commerce expertise to
                provide insights that drive success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 border-t-4 border-purple-500 hover:shadow-lg">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                Data Security
              </h3>
              <p className="text-gray-600 text-center">
                Your data security is our priority. We employ industry-leading
                practices to protect your information.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 border-t-4 border-green-500 hover:shadow-lg">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                Customer Success
              </h3>
              <p className="text-gray-600 text-center">
                We're committed to your success with dedicated support and
                continuous platform improvements.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* Our Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our diverse team of experts is passionate about helping businesses
              succeed in the competitive e-commerce landscape.
            </p>{" "}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden group border border-gray-200"
              >
                <div className="relative h-64 overflow-hidden flex justify-center items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white text-opacity-90">{member.bio}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-primary-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
        {/* Company Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-20 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <div className="md:flex items-center">
                  <div
                    className={`hidden md:block w-1/2 ${
                      index % 2 !== 0 ? "order-1 pl-16" : "pr-16"
                    }`}
                  >
                    <div
                      className={`bg-white p-6 rounded-xl shadow-md border-l-4 ${
                        index % 2 !== 0 ? "text-left" : "text-right"
                      } border-primary-500 transform transition-all duration-300 hover:scale-105`}
                    >
                      <h3 className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="bg-primary-600 text-white rounded-full h-14 w-14 flex items-center justify-center text-xl font-bold shadow-md">
                      {milestone.year}
                    </div>
                  </div>
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "order-1 md:pl-16" : "md:pr-16"
                    }`}
                  >
                    <div className="md:hidden flex mb-4">
                      <div className="bg-primary-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold shadow-md mr-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-primary-600 flex items-center">
                        {milestone.title}
                      </h3>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary-500 md:hidden">
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 border border-gray-200">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8 text-white opacity-90">
                Have questions about our services or want to learn more about
                how we can help your business? Our team is here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 text-primary-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span>saadhussain2505@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 text-primary-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span>+92 333-1522448</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-3 text-primary-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span>SEECS, NUST H-12, Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-12 bg-gray-50">
              <h3 className="text-2xl font-bold text-primary-600 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-700"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-medium rounded-md hover:from-primary-600 hover:to-primary-800 transition-colors duration-300 shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-12 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to supercharge your Amazon product strategy?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that use our platform to gain a
            competitive edge in the marketplace.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-md"
          >
            Get Started Now
          </Link>
        </div>
        {/* Additional styling for the page */}
        <style jsx>{`
          .bg-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
          }
        `}</style>
      </div>
    </PageTransition>
  );
};

export default AboutUs;
