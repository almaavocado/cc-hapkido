/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// Import your background image
import backgroundImage from '../assets/Songsbanner.png';

export default function Header() {
  return (
      <div className="relative bg-gray-100">
        {/* White Box */}
        <div className="absolute inset-x-0 top-44 bg-white bg-opacity-70 mx-auto w-11/12 sm:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Song's Hapkido West Los Angeles
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empowering Our Community through Hapkido Excellence!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Background Image */}
        <div
          className="bg-cover bg-no-repeat h-[600px] sm:h-[800px] md:h-[1000px] lg:h-[1200px] xl:h-[1400px] bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </div>
    
  );
}
