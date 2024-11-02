import React from "react";
import Fade from "react-awesome-reveal";
import { Link } from "react-router-dom";

const OurProcess = () => {
  const steps = [
    {
      id: "consultation",
      stepNumber: "1",
      title: "Consultation",
      description:
        "Understanding client needs and goals to start the project on the right foot.",
      bgColor: "bg-blue-100",
      stepColor: "text-blue-800",
      borderColor: "border-blue-600",
      icon: "fas fa-comments",
    },
    {
      id: "planning",
      stepNumber: "2",
      title: "Planning",
      description: "Creating a project roadmap with initial design concepts.",
      bgColor: "bg-purple-100",
      stepColor: "text-purple-800",
      borderColor: "border-purple-600",
      icon: "fas fa-map-signs",
    },
    {
      id: "design-development",
      stepNumber: "3",
      title: "Design & Development",
      description:
        "Bringing ideas to life with client feedback, iterating to perfection.",
      bgColor: "bg-green-100",
      stepColor: "text-green-800",
      borderColor: "border-green-600",
      icon: "fas fa-pencil-ruler",
    },
    {
      id: "testing",
      stepNumber: "4",
      title: "Testing",
      description:
        "Ensuring quality and functionality through thorough testing.",
      bgColor: "bg-yellow-100",
      stepColor: "text-yellow-800",
      borderColor: "border-yellow-600",
      icon: "fas fa-check-circle",
    },
    {
      id: "launch-support",
      stepNumber: "5",
      title: "Launch & Support",
      description: "Delivering the final product and offering ongoing support.",
      bgColor: "bg-red-100",
      stepColor: "text-red-800",
      borderColor: "border-red-600",
      icon: "fas fa-rocket",
    },
  ];

  return (
    <div className="py-16">
      <Fade bottom triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">
          Our Process
        </h1>

        <p className="font-light text-lg text-gray-400 text-center mb-14 sm:mb-5 xl:mb-0">
          Why you should choose us to handle your project.
        </p>
      </Fade>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 px-4">
        {steps.map((step, index) => (
          <Fade key={step.id} bottom delay={index * 100} triggerOnce>
            <div
              className={`border-4 ${step.borderColor} rounded-3xl p-8 shadow-lg transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div
                className={`flex items-center justify-center h-16 w-16 ${step.stepColor} rounded-full mb-4 text-4xl font-bold transition-all duration-300`}
              >
                <i className={`${step.icon}`}>.</i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm">{step.description}</p>
            </div>
          </Fade>
        ))}
      </div>
      <div className="mt-16 flex items-center justify-center ">
        <button
          type="button"
          aria-label="Start your project with us"
          className="bg-theme-purple shadow-2xl hover:bg-dark-theme-purple transition duration-200 text-white py-3 px-8 rounded-full font-semibold text-lg transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
        >
          <i className="fas fa-paper-plane mr-2">.</i>
          <Link to="/discuss-project"> Start Your Project with Us</Link>
        </button>
      </div>
    </div>
  );
};

export default OurProcess;
