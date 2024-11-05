import React, { useEffect } from "react";
import { Services, Advantages, Testimonials } from "json/landingPageData";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Service from "parts/Service";
import Advantage from "parts/Advantage";
import Testimonial from "parts/Testimonial";
import Discuss from "parts/Discuss";
import Footer from "parts/Footer";
import OurProcess from "parts/OurProcess";
import Button from "parts/ButtonMain";
import Service2 from "parts/Service2";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Redirect to WhatsApp when the button is clicked
  const redirectToWhatsApp = () => {
    const phoneNumber = "7973117120"; // Your WhatsApp number
    const message = "Hello! I would like to get in touch."; // Optional message
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank"); // Open in a new tab
  };

  return (
    <>
      <Header />
      <Hero />
      <Service2 />
      <Service data={Services} />
      <Advantage data={Advantages} />
      <OurProcess />
      <Testimonial data={Testimonials} />
      <Discuss />
      <Footer />
      <Button onClick={redirectToWhatsApp}>Message Us</Button>
    </>
  );
};

export default LandingPage;
