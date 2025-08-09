import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-start relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-orange-500">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="max-w-4xl">
          {/* Greeting */}
          <div className="flex items-center mb-6 lg:mb-8">
            <span className="text-2xl mr-3">👋</span>
            <h2 className="text-white text-lg lg:text-xl font-medium tracking-wide">
              HEY, I AM ERICA
            </h2>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 lg:mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-orange-300">
              A YOUNG CREATIVE
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-400 to-pink-500">
              DESIGNER
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600">
              {' '}BASED{' '}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
              IN
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-600">
              SAN DIEGO
            </span>
          </h1>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-transparent border-2 border-white/30 text-white px-8 py-3 rounded-full font-medium text-sm lg:text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
              MY WORKS
            </button>
            <button className="bg-white/20 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-3 rounded-full font-medium text-sm lg:text-base hover:bg-white/30 hover:border-white/40 transition-all duration-300">
              LET&apos;S TALK
            </button>
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;
