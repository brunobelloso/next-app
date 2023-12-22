// ResumePage.tsx
import React from "react";
import Image from "next/image";

const ResumePage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      {/* Header and Photo Section */}
      <div className="text-center mb-6">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/profile.jpg" // Replace with the actual path to the profile photo
            alt="Bruno Belloso"
            width={150} // Adjust the width as needed
            height={150} // Adjust the height as needed
            className="rounded-full mb-2"
          />
          <h1 className="text-4xl font-bold text-gray-800">Bruno Belloso</h1>
          <p className="text-gray-700 text-lg">Web Developer | Marketing Enthusiast</p>
        </div>
      </div>

      {/* Professional Summary Section */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Professional Summary</h2>
        <p className="text-gray-700 leading-7">
          Web developer with a marketing focus, passionate about connecting people. Four years of experience in application development in Python and JavaScript. Experienced in Node.js, Next.js, Express.js, and databases such as MySQL and MongoDB. Proficient in Tailwind for enhancing styling and web development efficiency.
        </p>
      </div>
    </div>
  );
};

export default ResumePage;
