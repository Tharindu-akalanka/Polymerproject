import React, { useEffect, useState } from 'react';

const CircularProgress = ({ percentage }) => {
  const [offset, setOffset] = useState(0);
  const size = 160;
  const strokeWidth = 12;
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, circumference, percentage]);

  return (
    <div className="relative flex justify-center items-center">
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        <circle
          className="text-eco-medium"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
        />
        <circle
          className="text-eco-light transition-all duration-1000 ease-out"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-white">{Math.round(percentage)}%</span>
        <span className="text-xs text-gray-300 mt-1 uppercase tracking-wider font-semibold">Completed</span>
      </div>
    </div>
  );
};

export default CircularProgress;
