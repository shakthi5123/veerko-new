import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import ContactForm from "../components/ContactForm";



const Contact = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white mt-2">
      <h2 className="text-3xl text-center md:text-4xl font-bold text-blue-600 mb-5 border-b pb-2 ">
        Contact Us
      </h2>

      {/* google Map  */}
      <div className="bg-white py-6 px-12 shodow-md grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 max-w-8xl mx-auto shadow-xl rounded-md border border-gray-200 transition hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
        <div className="rounded-lg overflow-hidden h-[400px] sm:h-[400px] w-full">
          <ErrorBoundary>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1468.9009286242429!2d72.99959157858245!3d19.06556976689871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c116c44b2e41%3A0xf25d6f87755145ba!2sHaware%20Fantasia%20Business%20Park!5e1!3m2!1sen!2sin!4v1750340888895!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </ErrorBoundary>
        </div>

        {/* Contact Details  */}
        <div className="flex flex-col justify-center text-black space-y-4">
          <h3 className="text-2xl font-semibold mb-2">Veerko</h3>
          <p className="text-sm font-bold mb-4">Your Perfect Gifting Partner</p>

          <div className="mb-4">
            <p className="font-semibold mb-1">📍 Office Address:</p>
            <p className="text-sm leading-relaxed">
              G-53, Ground Floor Haware Fantasia Business Park, Sector-30,
              Vashi, Navi Mumbai - 400703 ( Backside Inorbit Mall)
            </p>
          </div>

          <div className="mb-3 flex flex-row text-center">
            <p className="font-semibold mr-2">📞 Contact:</p>
            <p className="text-sm break-all">+91 84259 37790</p>
          </div>

          <div className="flex ">
            <p className="font-semibold mr-2 ">✉️ Email:</p>
            <p className="text-sm text-blue-600 underline break-all">
              info.veerko@gmail.com
            </p>
          </div>
        </div>
      </div>

    <ContactForm />

    </section>
  );
};

export default Contact;
