import React from 'react';

const WaveBackground = () => {
  return (
    <div className="absolute top-0 right-0 w-1/2 h-full z-0">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-50"
      >
        <path
          d="M250,400 Q400,250 250,100 T250,400"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          className="animate-pulse"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="M250,400 Q400,250 250,100 T250,400;
                    M250,400 Q300,200 250,100 T250,400;
                    M250,400 Q400,250 250,100 T250,400"
          />
        </path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6C5DD3" />
            <stop offset="100%" stopColor="#4B3EAE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WaveBackground;