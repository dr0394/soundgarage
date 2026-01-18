import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const images = [
    {
      url: 'https://i.imgur.com/n1NMGit.jpeg',
      title: 'Premium Sound Installation'
    },
    {
      url: 'https://i.imgur.com/Eh6dHpG.jpeg',
      title: 'Professional Car Audio'
    },
    {
      url: 'https://i.imgur.com/jui2lLz.jpeg',
      title: 'Custom Solutions'
    },
    {
      url: 'https://i.imgur.com/0qQgWsg.jpeg',
      title: 'High-End Equipment'
    },
    {
      url: 'https://i.imgur.com/suBRTWz.jpeg',
      title: 'Expert Installation'
    },
    {
      url: 'https://i.imgur.com/y6hADj1.jpeg',
      title: 'Modern Technology'
    },
    {
      url: 'https://i.imgur.com/DsgoHwV.jpeg',
      title: 'Quality Workmanship'
    },
    {
      url: 'https://i.imgur.com/eifrNMZ.jpeg',
      title: 'Perfect Integration'
    },
    {
      url: 'https://i.imgur.com/L6jiHgP.jpeg',
      title: 'Premium Brands'
    },
    {
      url: 'https://i.imgur.com/W3p0McT.jpeg',
      title: 'Sound Systems'
    },
    {
      url: 'https://i.imgur.com/mhXtPeP.jpeg',
      title: 'Professional Service'
    },
    {
      url: 'https://i.imgur.com/9Ow2FoL.jpeg',
      title: 'Top Quality'
    }
  ];

  const itemsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const [itemsToShow, setItemsToShow] = useState(itemsPerSlide.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(itemsPerSlide.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerSlide.tablet);
      } else {
        setItemsToShow(itemsPerSlide.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(images.length / itemsToShow);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const getCurrentImages = () => {
    const startIndex = currentSlide * itemsToShow;
    return images.slice(startIndex, startIndex + itemsToShow);
  };

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-white via-gray-50 to-white p-12 mb-16 rounded-3xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full -mr-32 -mt-32 animate-float-slow"></div>
          <div className="flex items-center space-x-4 mb-4">
            <Camera className="w-12 h-12 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight relative z-10">
              UNSERE ARBEITEN
            </h2>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl relative z-10">
            Ein Einblick in unsere professionellen Installationen und hochwertigen Lösungen
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mt-4 relative z-10"></div>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full flex gap-4 px-2"
                >
                  {images
                    .slice(slideIndex * itemsToShow, (slideIndex + 1) * itemsToShow)
                    .map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="flex-1 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        onClick={() => setSelectedImage(image.url)}
                      >
                        <div className="aspect-[4/3]">
                          <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                          <p className="text-white font-black text-lg tracking-wide">{image.title}</p>
                        </div>
                        <div className="absolute top-3 right-3 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110">
                          <Camera className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-14 h-14 bg-black/80 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-14 h-14 bg-black/80 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'w-12 bg-red-600'
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-red-600 transition-colors duration-300 w-12 h-12 flex items-center justify-center hover:scale-110"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
