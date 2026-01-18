import { Camera } from 'lucide-react';
import { useState } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-black via-gray-900 to-black p-12 mb-16 rounded-3xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full -mr-32 -mt-32 animate-float-slow"></div>
          <div className="flex items-center space-x-4 mb-4">
            <Camera className="w-12 h-12 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight relative z-10">
              UNSERE ARBEITEN
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl relative z-10">
            Ein Einblick in unsere professionellen Installationen und hochwertigen Lösungen
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mt-4 relative z-10"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-square">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-black text-sm tracking-wide">{image.title}</p>
              </div>
              <div className="absolute top-2 right-2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
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
