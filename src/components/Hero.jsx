import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const banners = [
  'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg',
  'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg',
  'https://m.media-amazon.com/images/I/71U-BeV3dlL._SX3000_.jpg',
  'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg'
];

const Hero = () => {
  return (
    <div className="relative w-full max-w-[1500px] mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="h-[300px] md:h-[600px]"
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img 
                src={img} 
                alt={`banner-${index}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-[180px] md:top-[420px] left-0 right-0 z-10 grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-white p-4 shadow-md hidden sm:block">
            <h3 className="font-bold mb-2">Exclusive Deals</h3>
            <div className="h-40 bg-gray-200 mb-2"></div>
            <a href="#" className="text-blue-600 text-xs hover:underline">Shop now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;