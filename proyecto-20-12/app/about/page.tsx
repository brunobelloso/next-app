// about.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <header>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Wenova - Crafting Online Experiences</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Text */}
        <div>
          <p className="text-gray-700 leading-7">
            We are a dynamic team of creative minds, committed to crafting compelling online experiences and providing top-notch services to elevate your brand.
          </p>
          <p className="text-gray-700 mt-4 leading-7">
            At Wenova, our mission is to empower individuals and businesses by seamlessly blending creativity and functionality. Specializing in web design, offering reliable hosting plans, fostering vibrant online communities, and creating visually striking branding solutions, we aim to leave a lasting impression on your audience.
          </p>
          {/* Add more content as needed */}
        </div>

        {/* CEO's Photo */}
        <div className="flex flex-col justify-center items-center mb-6">
          <Image
            src="/profile.jpg" // Replace with the actual path to the CEO's photo
            alt="Bruno Belloso, CEO & Founder"
            width={200} // Adjust the width as needed
            height={200} // Adjust the height as needed
            className="rounded-full"
          />
          <p className="mt-2 text-lg">
          <Link href="/resume"><span className="text-blue-500">Bruno Belloso</span></Link>, <span className="text-gray-700">CEO & Founder of Wenova</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
