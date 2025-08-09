import React from 'react';

const HeroWithCarousel = () => {
  // Logo data for carousel
  const logos = [
    { name: 'IPSUM', text: 'IPSUM', type: 'text' },
    { name: 'N-Logo', text: 'N', type: 'letter' },
    { name: 'Circles', text: '⊙', type: 'symbol' },
    { name: 'Infinity', text: '∞', type: 'symbol' },
    { name: 'logoipsum', text: '◉ logoipsum', type: 'branded' },
    { name: 'LOGO-IPSUM', text: 'LOGO◯IPSUM', type: 'branded' },
    { name: 'logoipsum-end', text: '◯ logoipsum', type: 'branded' },
  ];

  // Duplicate the logos multiple times for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative overflow-hidden" style={{
      background: `linear-gradient(342.27deg, #FFFAEF 8%, #FCD68B 15%, #F9784C 22%, #9C356D 29%, #171717 38%)`
    }}>
      {/* Main Hero Section */}
      <div className="min-h-screen flex items-center justify-start relative">

        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 ml-1 sm:ml-2 lg:ml-3">
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
      </div>

      {/* Logo Carousel Section - Seamlessly integrated */}
      <div className="py-12 lg:py-16 overflow-hidden">
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-32 z-10 pointer-events-none" style={{
            background: `linear-gradient(to right, #FFFAEF, rgba(255, 250, 239, 0.6), transparent)`
          }}></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-32 z-10 pointer-events-none" style={{
            background: `linear-gradient(to left, #171717, rgba(23, 23, 23, 0.6), transparent)`
          }}></div>
          
          {/* Moving logo container */}
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
    </section>
  );
};

export default HeroWithCarousel;
