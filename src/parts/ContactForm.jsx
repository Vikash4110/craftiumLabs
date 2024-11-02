import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa"; // Import icons from React Icons
import { toast, ToastContainer } from "react-toastify"; // Import toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast notifications

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send data to an API or email)
    console.log(formData);

    // Notify user of success
    toast.success("Message sent successfully!");

    // Reset the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between p-8 bg-white rounded-lg shadow-lg">
      {/* Left Side */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          "Your feedback is important to us!"
        </p>
        <p className="text-gray-600 mb-4">Connect with us:</p>
        <p className="flex items-center text-gray-600 mb-2">
          <FaEnvelope className="mr-2 text-blue-500" />
          support@example.com
        </p>
        <p className="flex items-center text-gray-600">
          <FaPhone className="mr-2 text-blue-500" />
          +123 456 7890
        </p>
      </div>

      {/* Right Side - Form */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md"
      >
        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <FaUser className="p-2 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 outline-none"
              placeholder="Your Name"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <FaEnvelope className="p-2 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 outline-none"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <FaPhone className="p-2 text-gray-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 outline-none"
              placeholder="Your Phone Number"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">
            Message
          </label>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <FaRegCommentDots className="p-2 text-gray-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 outline-none"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
