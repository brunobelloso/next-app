// services.tsx
import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <header>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Discover Our Comprehensive Marketing Services</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Web Design */}
        <article className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Web Design Services</h2>
          <p className="text-gray-700">
            Create a stunning online presence with our user-friendly web design services. We blend creativity and functionality to craft visually appealing websites, elevating your brand and effectively engaging your audience.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">
            Learn More about Our Web Design
          </button>
        </article>

        {/* Hosting Plans */}
        <article className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Reliable Hosting Plans</h2>
          <p className="text-gray-700">
            Ensure a reliable online presence with our hosting plans. We provide performance, security, and scalability for your website, allowing you to focus on business growth while we handle the technical details.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">
            Explore Our Hosting Plans
          </button>
        </article>

        {/* Community Management */}
        <article className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Expert Community Management</h2>
          <p className="text-gray-700">
            Build a thriving online community with our expert management services. Engage your audience, foster interactions, and create a loyal following. Let's establish a vibrant digital community together.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">
            Learn More about Community Management
          </button>
        </article>

        {/* Branding and Logo Design */}
        <article className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Distinctive Branding and Logo Design</h2>
          <p className="text-gray-700">
            Stand out with our branding and logo design services. We work closely with you to create visually striking logos and a cohesive brand image, making a lasting impression on your audience.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">
            Learn More about Branding and Logo Design
          </button>
        </article>

        {/* Domain Registrations */}
        <article className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Secure Your Presence with Domain Registrations</h2>
          <p className="text-gray-700">
            Register your domain with us for a secure online identity. Choose from a variety of domain extensions and ensure a memorable and SEO-friendly address for your website.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700 transition duration-300">
            Explore Domain Registration Options
          </button>
        </article>
      </div>
      {/* Add more services as needed */}
    </div>
  );
};

export default ServicesPage;
