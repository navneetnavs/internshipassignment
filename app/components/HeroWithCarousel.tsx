import React from 'react';
import Image from 'next/image';

const HeroWithCarousel = () => {
  // Logo data hai isme
  const logos = [
    { name: 'IPSUM', text: 'IPSUM', type: 'text' },
    { name: 'N-Logo', text: 'N', type: 'letter' },
    { name: 'Circles', text: '⊙', type: 'symbol' },
    { name: 'Infinity', text: '∞', type: 'symbol' },
    { name: 'logoipsum', text: '◉ logoipsum', type: 'branded' },
    { name: 'LOGO-IPSUM', text: 'LOGO◯IPSUM', type: 'branded' },
    { name: 'logoipsum-end', text: '◯ logoipsum', type: 'branded' },
  ];


  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative overflow-hidden" style={{
      background: `linear-gradient(170deg, #000000 0%, #000000 35%, #1a0a0a 45%, #4a1f2a 50%, #8b3d5a 55%, #f2a07b 60%, #fff5e6 100%)`
    }}>
      {/* Main Hero Section */}
      <div className="min-h-screen flex items-center justify-start relative">

        
        {/* Hero का सारा content यहाँ है */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 text-center lg:text-left lg:ml-1 lg:sm:ml-2 lg:lg:ml-3">
          <div className="max-w-5xl mx-auto lg:mx-0">
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


      </div>

      
      <div className="py-12 lg:py-16 overflow-hidden">
        <div className="relative">

          
          <div className="flex items-center">
            <div className="flex items-center space-x-12 sm:space-x-16 lg:space-x-20 xl:space-x-24 animate-scroll-left whitespace-nowrap">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center min-w-fit"
                >
                  <div className="text-white/60 hover:text-white/90 transition-all duration-500 cursor-pointer">
                    {logo.type === 'letter' && (
                      <span className="text-4xl lg:text-5xl font-bold tracking-wider">
                        {logo.text}
                      </span>
                    )}
                    {logo.type === 'symbol' && (
                      <span className="text-3xl lg:text-4xl font-light">
                        {logo.text}
                      </span>
                    )}
                    {logo.type === 'text' && (
                      <span className="text-xl lg:text-2xl font-bold tracking-widest">
                        {logo.text}
                      </span>
                    )}
                    {logo.type === 'branded' && (
                      <span className="text-lg lg:text-xl font-medium tracking-wide">
                        {logo.text}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Seamlessly integrated */}
      <div className="py-16 lg:py-24 overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
            
            {/* Image Section with Gradient Oval */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                {/* Gradient oval background */}
                <div className="absolute inset-0 rounded-full transform -rotate-12 scale-110 blur-2xl opacity-30" style={{
                  background: `linear-gradient(135deg, #F9784C, #9C356D)`
                }}></div>
                <div className="absolute inset-0 rounded-full transform rotate-6 scale-105 blur-xl opacity-40" style={{
                  background: `linear-gradient(135deg, #FCD68B, #F9784C, #9C356D)`
                }}></div>
                
                {/* oval container */}
                <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] xl:w-[26rem] xl:h-[36rem] rounded-full p-1 shadow-2xl" style={{
                  background: `linear-gradient(135deg, #F9784C, #9C356D)`
                }}>
                  <div className="w-full h-full rounded-full overflow-hidden" style={{
                    background: `linear-gradient(135deg, #FCD68B, #F9784C, #9C356D)`
                  }}>
                    {/* freelancer image */}
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent z-10"></div>
                      
                      <Image
                        src="/image/imagefreelancer.jpg"
                        alt="Erica Jones - Creative Designer"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 320px, 384px"
                        priority
                      />
                    </div>
                  </div>
                </div>
                

              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 space-y-2">
              {/* Section Label */}
              <div className="text-base lg:text-lg font-semibold tracking-wider uppercase mb-1" style={{color: '#F9784C'}}>
                ABOUT
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                CRAFTING UNIQUE
                <br />
                <span className="text-gray-900">BRAND EXPERIENCES</span>
                <br />
                <span className="text-gray-900">SINCE 2014</span>
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
                With a Visual Arts degree, my journey began in graphic design, crafting logos and marketing materials. Video editing followed, where meticulous attention to detail set my work apart, and I ventured into 3D modeling for immersive experiences.
              </p>

              {/* CTA Button - call करने के लिए */}
              <div className="pt-4">
                <button className="w-full sm:w-auto bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-medium text-sm lg:text-base hover:bg-gray-900 hover:text-white transition-all duration-300 tracking-wide">
                  SCHEDULE A CALL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithCarousel;
