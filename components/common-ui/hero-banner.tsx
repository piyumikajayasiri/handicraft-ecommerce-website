import Image from "next/image";
import React from "react";
import HeroBannerImage from "../../public/images/image.png";

const HeroBanner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-16 md:px-6 py-12 bg-[#EEEEEE]">
      {/* Text Section */}
      <div className="flex-1 mb-8 md:mb-0 md:pr-10 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-[#C35F40] mb-4">
          Invest in the World&apos;s Potential
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Handicraft art, or handmade crafts, involves creating items by hand,
          often reflecting cultural heritage and personal creativity. These
          crafts include techniques like weaving, pottery, embroidery,
          woodworking, and metalworking. Each piece is unique, showcasing the
          artisan&apos;s skill and attention to detail. Made from natural
          materials such as wood, clay, metal, and fabric, handicrafts emphasize
          sustainability and authenticity.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <Image
          src={HeroBannerImage}
          alt="Hero banner image"
          className="w-full h-auto max-w-md mx-auto"
          priority
        />
      </div>
    </section>
  );
};

export default HeroBanner;
