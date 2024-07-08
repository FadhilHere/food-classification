import React from "react";

export default function Header() {
  function handleScrollToSection(event, sectionId) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  function KomponenHeader() {
    return (
      <header className="bg-[#FFF5EC] drop-shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center mx-[183px] py-[23px]">
          <Logo />
          <Menu />
          <ButtonProsesData />
        </div>
      </header>
    );
  }

  function Logo() {
    return (
      <a href="#beranda" onClick={(e) => handleScrollToSection(e, "beranda")}>
        <img src="/logo.png" alt="Fast Food Logo" className="mr-2" />
      </a>
    );
  }

  function Menu() {
    return (
      <nav>
        <ul className="flex space-x-6 poppins-bold">
          <li>
            <a
              href="#beranda"
              onClick={(e) => handleScrollToSection(e, "beranda")}
              className="text-[#FE765E] hover:text-[#E20F0F]"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#tentang-kami"
              onClick={(e) => handleScrollToSection(e, "tentang-kami")}
              className="text-[#FE765E] hover:text-[#E20F0F]"
            >
              Tentang Kami
            </a>
          </li>
          {/* <li>
            <a
              href="#arsitektur"
              onClick={(e) => handleScrollToSection(e, "arsitektur")}
              className="text-[#FE765E] hover:text-[#E20F0F]"
            >
              Arsitektur
            </a>
          </li> */}
          <li>
            <a
              href="#biodata"
              className="text-[#FE765E] hover:text-[#E20F0F]"
              onClick={(e) => handleScrollToSection(e, "biodata")}
            >
              Biodata
            </a>
          </li>
          <li>
            <a
              href="#data"
              className=" text-[#FE765E] hover:text-[#E20F0F]"
              onClick={(e) => handleScrollToSection(e, "data")}
            >
              Data
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  function ButtonProsesData() {
    return (
      <button
        className="bg-[#FE765E] text-white py-2 px-4 rounded hover:bg-orange-600 poppins-medium"
        onClick={(e) => handleScrollToSection(e, "process")}
      >
        Proses Data
      </button>
    );
  }

  return (
    <div>
      <KomponenHeader />
    </div>
  );
}
