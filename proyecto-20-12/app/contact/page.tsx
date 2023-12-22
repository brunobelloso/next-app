// contact.tsx
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
      <p className="text-gray-700 leading-7">
        We'd love to hear from you! Contact us for inquiries, collaboration, or
        any questions you might have.
      </p>

      {/* Contact Form (Replace with your actual contact form component) */}
      <form className="mt-6">
        {/* Your contact form fields go here */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded"
            placeholder="Your Email"
          />
        </div>

        {/* Additional fields for your contact form */}

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full p-2 border rounded"
            placeholder="Your Message"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
