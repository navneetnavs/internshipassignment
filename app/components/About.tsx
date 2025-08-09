import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-16 lg:py-24 overflow-hidden" id="about" style={{background: '#FFFAEF'}}>
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
              
              {/* Main oval container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[26rem] xl:w-[26rem] xl:h-[30rem] rounded-full p-1 shadow-2xl" style={{
                background: `linear-gradient(135deg, #F9784C, #9C356D)`
              }}>
                <div className="w-full h-full rounded-full overflow-hidden" style={{
                  background: `linear-gradient(135deg, #FCD68B, #F9784C, #9C356D)`
                }}>
                  {/* Actual freelancer image */}
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    {/* Overlay gradient for depth and better text contrast */}
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
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-60 animate-pulse" style={{background: '#F9784C'}}></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full opacity-40 animate-pulse delay-1000" style={{background: '#9C356D'}}></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Section Label */}
            <div className="text-sm font-semibold tracking-wider uppercase" style={{color: '#F9784C'}}>
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

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-medium text-sm lg:text-base hover:bg-gray-900 hover:text-white transition-all duration-300 tracking-wide">
                SCHEDULE A CALL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
