import React from "react";
import burger from "../../src/assets/images/burger.png"; // Pastikan path ini benar
import crispyChicken from "../../src/assets/images/crispy-chicken.png";
import donut from "../../src/assets/images/donut.png";
import fries from "../../src/assets/images/fries.png";
import hotDog from "../../src/assets/images/hot-dog.png";
import pizza from "../../src/assets/images/pizza.png";
import sandwich from "../../src/assets/images/sandwich.png"; // Tambahkan path gambar sandwich
import taco from "../../src/assets/images/taco.png"; // Tambahkan path gambar taco
import bakedPotato from "../../src/assets/images/baked-potato.png"; // Tambahkan path gambar baked potato
import taquito from "../../src/assets/images/taquito.png"; // Tambahkan path gambar taquito

const data = [
  {
    photo: burger,
    label: "Burger",
    ingredients: "Roti burger, Daging sapi, Keju, Selada, Tomat, Saus",
    positiveEffects:
      "Sumber protein yang baik, Mengandung vitamin dan zat besi",
    negativeEffects: "Tinggi lemak dan kalori, Mengandung natrium yang tinggi",
  },
  {
    photo: crispyChicken,
    label: "Crispy Chicken",
    ingredients: "Ayam, Tepung, Rempah-rempah",
    positiveEffects: "Sumber protein yang baik, Dapat disajikan dengan sayuran",
    negativeEffects: "Tinggi kalori dan lemak, Mengandung zat karsinogenik",
  },
  {
    photo: donut,
    label: "Donut",
    ingredients: "Tepung terigu, Gula, Telur, Susu, Ragi",
    positiveEffects: "Memberikan energi cepat",
    negativeEffects: "Tinggi kalori dan lemak, Mengandung gula yang tinggi",
  },
  {
    photo: fries,
    label: "Fries",
    ingredients: "Kentang, Minyak goreng, Garam",
    positiveEffects: "Sumber karbohidrat dan energi",
    negativeEffects: "Tinggi lemak dan kalori, Mengandung garam yang tinggi",
  },
  {
    photo: hotDog,
    label: "Hot Dog",
    ingredients: "Roti hot dog, Sosis, Saus",
    positiveEffects: "Sumber protein dari sosis",
    negativeEffects: "Tinggi lemak dan kalori, Mengandung natrium yang tinggi",
  },
  {
    photo: pizza,
    label: "Pizza",
    ingredients: "Adonan roti, Saus tomat, Keju, Topping",
    positiveEffects: "Sumber karbohidrat dan protein",
    negativeEffects: "Tinggi kalori dan lemak",
  },
  {
    photo: sandwich,
    label: "Sandwich",
    ingredients: "Roti, Daging, Keju, Selada, Tomat, Saus",
    positiveEffects: "Sumber protein dan serat, Mengandung vitamin",
    negativeEffects: "Tergantung pada isiannya, bisa tinggi lemak",
  },
  {
    photo: taco,
    label: "Taco",
    ingredients: "Tortilla, Daging, Sayuran, Saus",
    positiveEffects: "Sumber serat, protein, dan vitamin",
    negativeEffects: "Tinggi natrium jika menggunakan saus instan",
  },
  {
    photo: bakedPotato,
    label: "Baked Potato",
    ingredients: "Kentang, Minyak zaitun, Garam, Merica, Keju, Krim asam",
    positiveEffects: "Kaya akan serat, sumber vitamin C",
    negativeEffects: "Tinggi kalori jika dikonsumsi berlebihan",
  },
  {
    photo: taquito,
    label: "Taquito",
    ingredients: "Tortilla, Daging, Keju, Saus",
    positiveEffects: "Sumber protein dan karbohidrat",
    negativeEffects: "Tinggi kalori dan lemak",
  },
];

function Card({ photo, label, ingredients, positiveEffects, negativeEffects }) {
  return (
    <div className="max-w-xs rounded-3xl overflow-hidden shadow-lg m-4 bg-[#1E174C] text-white border-8 border-white">
      <div className="flex justify-center">
        <img className="w-full h-64 px-4" src={photo} alt={label} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{label}</div>
        <div className="font-bold text-lg mb-2">Ingredients:</div>
        <p className="text-base mb-4">{ingredients}</p>
        <div className="font-bold text-lg mb-2">Dampak Positif:</div>
        <p className="text-base mb-4">{positiveEffects}</p>
        <div className="font-bold text-lg mb-2">Dampak Negatif:</div>
        <p className="text-base mb-4">{negativeEffects}</p>
      </div>
    </div>
  );
}

export default function DataDisplay() {
  return (
    <section className="py-12 bg-[#FE765E]">
      <div className="container mx-auto px-4 mt-[175px]">
        <h2 className="text-3xl font-bold text-center text-[#1E174C] mb-6">
          Data Training & Data Testing
        </h2>
        <div className="flex flex-wrap justify-center mx-[80px]">
          {data.map((item, index) => (
            <Card
              key={index}
              photo={item.photo}
              label={item.label}
              ingredients={item.ingredients}
              positiveEffects={item.positiveEffects}
              negativeEffects={item.negativeEffects}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
