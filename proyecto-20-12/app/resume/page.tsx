// ResumePage.tsx
import React from "react";
import Image from "next/image";

const ResumePage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Bruno Belloso</h1>
        <p className="text-gray-700 text-lg">Web Developer | Marketing Enthusiast</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Text */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Professional Summary</h2>
          <p className="text-gray-700 leading-7">
            Web developer with a marketing focus, passionate about connecting people. Four years of experience in application development in Python and JavaScript. Experienced in Node.js, Next.js, Express.js, and databases such as MySQL and MongoDB. Proficient in Tailwind for enhancing styling and web development efficiency.
          </p>
        </div>

        {/* Profile Photo */}
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/profile.jpg" // Replace with the actual path to the profile photo
            alt="Bruno Belloso"
            width={200} // Adjust the width as needed
            height={200} // Adjust the height as needed
            className="rounded-full mb-2"
          />
          <p className="text-gray-700 text-lg">Bruno Belloso, Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
