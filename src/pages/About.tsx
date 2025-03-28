import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-400 mb-6">
              We're dedicated to creating innovative solutions that empower users
              and transform the way people interact with technology.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-400">
              To be the leading platform that bridges language barriers and
              connects people across cultures through technology.
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#6C5DD3] rounded-full mr-3"></span>
                Develop cutting-edge language learning tools
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#6C5DD3] rounded-full mr-3"></span>
                Create intuitive user experiences
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#6C5DD3] rounded-full mr-3"></span>
                Foster global communication
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#6C5DD3] rounded-full mr-3"></span>
                Drive technological innovation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;