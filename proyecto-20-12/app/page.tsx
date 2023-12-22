// /app/page.tsx
import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-between mt-4 mb-4 p-4 md:p-8 lg:p-32">
      {/* Jumbotron Section */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 md:p-12 lg:p-16 rounded-lg shadow-md mb-12 hover:shadow-lg transition duration-300">
        <h1 className="text-4xl font-bold mb-4">
          Discover Our Marketing Services
        </h1>
        <p className="text-lg mb-4">
          Unlock the full potential of your business with our digital marketing
          services tailored to your business needs.
        </p>
        <Link href="/services">
          <span
            className="inline-block bg-white text-blue-500 px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-blue-100 hover:text-blue-700"
            aria-label="Explore Our Digital Marketing Services"
          >
            Discover Our Services
          </span>
        </Link>
      </header>

      {/* Card Section */}
      <section className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 - Web Design */}
        <Link href="/web-design">
          <span className="text-decoration-none">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-bold mb-2">Web Design</h2>
              <p className="text-gray-700">
                Craft a captivating online presence with our tailored web design
                solutions.
              </p>
            </div>
          </span>
        </Link>

        {/* Card 2 - Hosting Plans */}
        <Link href="/hosting-plans">
          <span className="text-decoration-none">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-bold mb-2">Hosting Plans</h2>
              <p className="text-gray-700">
                Ensure a seamless online experience with our reliable hosting
                plans.
              </p>
            </div>
          </span>
        </Link>

        {/* Card 3 - Community Management */}
        <Link href="/community-management">
          <span className="text-decoration-none">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-bold mb-2">Community Management</h2>
              <p className="text-gray-700">
                Build a thriving online community with our expert management
                services.
              </p>
            </div>
          </span>
        </Link>

        {/* Card 4 - Branding and Logo Design */}
        <Link href="/branding-and-logo-design">
          <span className="text-decoration-none">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-bold mb-2">
                Branding and Logo Design
              </h2>
              <p className="text-gray-700">
                Elevate your brand's identity with distinctive design services.
              </p>
            </div>
          </span>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
