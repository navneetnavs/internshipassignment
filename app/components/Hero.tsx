import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-start relative overflow-hidden" style={{
      background: `linear-gradient(to bottom, 
        #000000 0%, 
        #000000 40%, 
        #FF7E32 70%, 
        #FF4F81 85%, 
        #A02EFF 100%)`
    }}>
      {/* Soft blur overlay for smooth glow effect */}
      <div className="absolute inset-0 backdrop-blur-sm opacity-80" style={{
        background: `linear-gradient(to bottom, 
          rgba(0, 0, 0, 0.8) 0%, 
          rgba(0, 0, 0, 0.4) 50%, 
          rgba(255, 126, 50, 0.1) 75%, 
          rgba(255, 79, 129, 0.1) 85%, 
          rgba(160, 46, 255, 0.1) 100%)`
      }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28">
        <div className="max-w-5xl">
          {/* Greeting */}
          <div className="flex items-center mb-8 lg:mb-10">
            <span className="text-2xl lg:text-3xl mr-3">👋</span>
            <h2 className="text-white text-lg lg:text-xl font-medium tracking-wide">
              HEY, I AM ERICA
            </h2>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 lg:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-orange-200 to-orange-300">
              A YOUNG CREATIVE
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-400 to-pink-500">
              DESIGNER
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-purple-500">
              {' '}BASED{' '}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              IN
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-600">
              SAN DIEGO
            </span>
          </h1>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-transparent border-2 border-white/40 text-white px-10 py-4 rounded-full font-medium text-base lg:text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm tracking-wide">
              MY WORKS
            </button>
            <button className="bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-full font-medium text-base lg:text-lg hover:bg-white/25 hover:border-white/50 transition-all duration-300 tracking-wide">
              LET&apos;S TALK
            </button>
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs with updated colors */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15" style={{background: '#FF4F81'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{background: '#FF7E32'}}></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full blur-2xl opacity-8" style={{background: '#A02EFF'}}></div>
    </section>
  );
};

export default Hero;
