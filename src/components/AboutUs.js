import React from "react";
import aboutUsImage from "../assets/images/about-us-image.png"; // Gambar dari Figma

export default function AboutUs() {
  return (
    <section className="relative" id="tentang-kami">
      <div className="absolute inset-x-0 top-[-50px] md:top-[-70px] mx-auto w-[90%] md:w-[70%]">
        <img src={aboutUsImage} alt="About Us" className="w-full" />
      </div>
    </section>
  );
}
