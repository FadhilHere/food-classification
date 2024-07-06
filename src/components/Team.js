import React from "react";
import Slider from "react-slick";
import member1 from "../../src/assets/images/fadhil.JPG"; // Pastikan path ini benar
import member2 from "../../src/assets/images/indah.jpeg";

const teamMembers = [
  {
    photo: member1,
    name: "Fadhil Parmata",
    role: "Backend",
    description: "bjar bjir anjir.",
  },
  {
    photo: member2,
    name: "Indah Novitriani",
    role: "Frontend",
    description: "algren.",
  },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-[400px] z-10 cursor-pointer align-center"
      onClick={onClick}
    >
      <div className="bg-[#1E174C] text-white rounded-full p-2">
        <span className="text-2xl">→</span>
      </div>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-[400px] z-10 cursor-pointer align-center"
      onClick={onClick}
    >
      <div className="bg-[#1E174C] text-white rounded-full p-2">
        <span className="text-2xl">←</span>
      </div>
    </div>
  );
}

function TeamMember() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-12 bg-[#FE765E]" id="biodata">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl poppins-extrabold text-center text-[#1E174C] mb-6">
          Our Team Members
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4">
                <div className="max-w-md mx-auto bg-[#1E174C] p-6 rounded-3xl shadow-lg text-center">
                  <div className="relative -mt-2 mx-auto w-32 h-full">
                    <img
                      className="w-full h-full rounded-3xl border-4 border-[#FE765E] mx-auto"
                      src={member.photo}
                      alt={member.name}
                    />
                  </div>
                  <h3 className="text-xl poppins-extrabold text-[#FFFFFF] mt-4">
                    {member.name}
                  </h3>
                  <p className="text-[#FE765E] poppins-bold">{member.role}</p>
                  {/* <p className="text-gray-700">{member.description}</p> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default TeamMember;
