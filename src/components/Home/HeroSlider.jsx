import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const featuredChallenges = [
  {
    id: 1,
    title: "Plastic-Free Week",
    description: "Take the 7-day challenge to go completely plastic-free!",
    image:
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
  },
  {
    id: 2,
    title: "Clean Energy Challenge",
    description:
      "Switch to renewable energy sources and help power a sustainable future!",
    image:
      "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVuZXdhYmxlJTIwZW5lcmd5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
  },
  {
    id: 3,
    title: "Tree Plantation Drive",
    description:
      "Join our community to plant trees and make the earth greener!",
    image:
      "https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full h-[90vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-full"
      >
        {featuredChallenges.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white relative"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-center px-4 md:px-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl mb-6">{item.description}</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                  View Challenge
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
