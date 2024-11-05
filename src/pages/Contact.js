import React from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row items-start justify-center mt-5 lg:p-16 pb-10">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-xl md:text-xl text-black font-medium uppercase">
            CONTACT US
          </h2>
          <br />
          <h1 className="text-theme-blue  text-4xl md:text-7xl font-bold leading-tight">
            Take the{" "}
            <span className="text-theme-purple">
              <br />
              next step
            </span>
          </h1>
          <p className="text-2xl font-semibold text-theme-blue mt-4 underline">
            <a href="tel:+917973117120">+91 7973117120</a>,{" "}
            <a href="tel:+916284528221">+91 6284528221</a>
          </p>

          <a
            href="mailto:hello@sprintdigital.com.au"
            className="text-2xl text-theme-blue underline hover:underline"
          >
            craftiumlabs@gmail.com{" "}
          </a>
          <div className="mt-8">
            <h3 className="text-lg md:text-xl text-gray-500 font-medium uppercase">
              ADDRESS
            </h3>
            <p className="text-gray-700 text-lg font-medium">
              {/* Suite GB */}
              <br />
              {/* 120 Wickham Street,
              <br />  */}
              Jalandhar, Punjab 144021{" "}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-8">
          <form className="space-y-4 w-full max-w-lg">
            <div className="relative">
              <label htmlFor="name" className="block text-black">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full px-3 py-4 bg-[#f3f3f3] bg-opacity-80 focus:outline-none rounded-lg transition duration-300"
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-black">
                Email address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full px-3 py-4 bg-[#f3f3f3] bg-opacity-80 focus:outline-none rounded-lg transition duration-300"
              />
            </div>
            <div className="relative">
              <label htmlFor="phone" className="block text-black">
                Phone number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 w-full px-3 py-4 bg-[#f3f3f3] bg-opacity-80 focus:outline-none rounded-lg transition duration-300"
              />
            </div>
            <div className="relative">
              <label htmlFor="message" className="block text-black">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 w-full px-3 py-4 bg-[#f3f3f3] bg-opacity-80 focus:outline-none rounded-lg transition duration-300"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className=" w-full font-bold mx-auto px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
