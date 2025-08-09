import React from 'react';

const LogoCarousel = () => {
  // Logo data - creating text representations similar to the image
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
    <section className="py-12 lg:py-16 overflow-hidden" style={{
      background: `linear-gradient(135deg, 
        #9C356D 0%, 
        #F9784C 50%, 
        #FCD68B 100%)`
    }}>
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-32 z-10 pointer-events-none" style={{
          background: `linear-gradient(to right, #9C356D, rgba(156, 53, 109, 0.6), transparent)`
        }}></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-32 z-10 pointer-events-none" style={{
          background: `linear-gradient(to left, #FCD68B, rgba(252, 214, 139, 0.6), transparent)`
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
    </section>
  );
};

export default LogoCarousel;
