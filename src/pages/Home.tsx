import React from 'react';
import WaveBackground from '../components/WaveBackground';
import { Search } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      <WaveBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-3xl">
          <h1 className="text-7xl font-bold mb-8">
            Welcome.
          </h1>
          
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent border-2 border-gray-700 rounded-full py-3 px-6 pr-12 focus:outline-none focus:border-[#6C5DD3] transition-colors duration-200"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#6C5DD3] rounded-lg flex items-center justify-center">
              <span className="text-2xl">▶</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Landing page.</h2>
              <p className="text-gray-400 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;