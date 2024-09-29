"use client"

import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2024-10-01T15:00:00Z'); // October 1st, 2024 at 15:00 UTC

    const timer = setInterval(() => {
      const now = new Date();
      const distance = targetDate.getTime() - now.getTime();

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="text-white text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-gray-200">BE READY</h1>
      <div className="flex items-center justify-center space-x-2 sm:space-x-4">
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-6xl font-bold border-2 border-gray-600 rounded-xl p-2 sm:p-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center text-[#FFC500]">
            {formatTime(timeLeft.hours)}
          </div>
          <span className="text-sm mt-2">Hours</span>
        </div>
        <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#FFC500]">:</div>
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-6xl font-bold border-2 border-gray-600 rounded-xl p-2 sm:p-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center text-[#FFC500]">
            {formatTime(timeLeft.minutes)}
          </div>
          <span className="text-sm mt-2">Minutes</span>
        </div>
        <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#FFC500]">:</div>
        <div className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-6xl font-bold border-2 border-gray-600 rounded-xl p-2 sm:p-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center text-[#FFC500]">
            {formatTime(timeLeft.seconds)}
          </div>
          <span className="text-sm mt-2">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;