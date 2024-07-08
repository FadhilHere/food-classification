import React from "react";
import foodImage from "../assets/images/food-image.png";

export default function HeroSection() {
  function handleScrollToSection(event, sectionId) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  function KomponenHeroSection() {
    return (
      <section className="bg-[#FFF5EC] py-12 mt-[50px]" id="beranda">
        <div className="flex flex-col md:flex-row justify-between items-center mx-[185px]">
          <TeksHero />
          <GambarHero />
        </div>
      </section>
    );
  }

  function TeksHero() {
    return (
      <div className="max-w-xl mb-8 md:mb-0 text-left">
        <h1 className="text-6xl poppins-bold text-[#1E174C] leading-tight">
          Klasifikasi Jenis <br></br>
          <span className="text-[#FE765E]">Fast Food</span>
        </h1>
        <p className="text-xl text-gray-600 my-6 leading-relaxed">
          Hidangan cepat saji lezat, burger, fried chicken, pizza, dan lainnya.
          Disajikan dengan cepat dan praktis, siap dinikmati.
        </p>
        <button
          className="bg-[#FE765E] text-white py-3 px-6 rounded hover:bg-orange-600"
          onClick={(e) => handleScrollToSection(e, "data")}
        >
          Jenis Fast Food
        </button>
      </div>
    );
  }

  function GambarHero() {
    return (
      <div className="w-full md:w-1/2 flex justify-end">
        <img
          src={foodImage}
          alt="Fast Food"
          className="max-w-full h-[540px] object-cover"
        />
      </div>
    );
  }

  return <KomponenHeroSection />;
}
