import React, { useState } from "react";
import axios from "axios";

export default function ImageProcessing() {
  const [predictedLabel, setPredictedLabel] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [positiveEffects, setPositiveEffects] = useState("");
  const [negativeEffects, setNegativeEffects] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");

  const labelDescriptions = {
    0: {
      label: "Baked Potato",
      description:
        "Baked potato adalah kentang panggang yang lezat dengan bumbu dan topping.",
      ingredients: "Kentang, minyak zaitun, garam, merica, keju, krim asam.",
      positiveEffects: "Kaya akan serat, sumber vitamin C.",
      negativeEffects: "Tinggi kalori jika dikonsumsi berlebihan.",
    },
    1: {
      label: "Burger",
      description:
        "Burger adalah sandwich yang terdiri dari satu atau lebih patty daging cincang, biasanya daging sapi, ditempatkan di dalam roti yang dibelah dua.",
      ingredients: "Roti, daging sapi, keju, selada, tomat, bawang, saus.",
      positiveEffects: "Sumber protein, zat besi, dan vitamin B12.",
      negativeEffects: "Tinggi lemak jenuh dan kolesterol.",
    },
    2: {
      label: "Crispy Chicken",
      description:
        "Crispy chicken adalah hidangan ayam yang dilapisi tepung dan digoreng.",
      ingredients: "Ayam, tepung, telur, minyak goreng, bumbu.",
      positiveEffects: "Sumber protein, mengandung vitamin B6.",
      negativeEffects: "Tinggi lemak dan kalori.",
    },
    3: {
      label: "Donut",
      description:
        "Donut adalah kue berbentuk cincin yang digoreng dan biasanya diberi hiasan gula atau cokelat.",
      ingredients: "Tepung, gula, telur, mentega, minyak goreng.",
      positiveEffects: "Sumber energi cepat.",
      negativeEffects: "Tinggi gula dan kalori.",
    },
    4: {
      label: "Fries",
      description: "Fries adalah potongan kentang yang digoreng hingga renyah.",
      ingredients: "Kentang, minyak goreng, garam.",
      positiveEffects: "Sumber karbohidrat dan energi.",
      negativeEffects: "Tinggi lemak dan kalori.",
    },
    5: {
      label: "Hot Dog",
      description: "Hot dog adalah sosis yang disajikan di dalam roti panjang.",
      ingredients: "Roti, sosis, mustard, saus tomat, bawang.",
      positiveEffects: "Sumber protein, praktis dan cepat disiapkan.",
      negativeEffects: "Tinggi natrium dan lemak jenuh.",
    },
    6: {
      label: "Pizza",
      description:
        "Pizza adalah roti pipih bundar yang dipanggang dengan berbagai topping.",
      ingredients: "Tepung, keju, saus tomat, topping pilihan.",
      positiveEffects: "Mengandung berbagai nutrisi dari topping.",
      negativeEffects: "Tinggi lemak dan kalori.",
    },
    7: {
      label: "Sandwich",
      description:
        "Sandwich adalah dua potong roti yang diisi dengan berbagai macam bahan makanan.",
      ingredients: "Roti, daging, keju, sayuran, saus.",
      positiveEffects: "Sumber serat dan berbagai nutrisi.",
      negativeEffects: "Tergantung pada isiannya, bisa tinggi lemak.",
    },
    8: {
      label: "Taco",
      description:
        "Taco adalah hidangan tradisional Meksiko yang terdiri dari tortilla yang dilipat atau digulung dengan isian.",
      ingredients: "Tortilla, daging, sayuran, saus.",
      positiveEffects: "Sumber serat, protein, dan vitamin.",
      negativeEffects: "Tinggi natrium jika menggunakan saus instan.",
    },
    9: {
      label: "Taquito",
      description:
        "Taquito adalah tortilla kecil yang digulung dan diisi dengan daging atau bahan lainnya.",
      ingredients: "Tortilla, daging, keju, saus.",
      positiveEffects: "Sumber protein dan karbohidrat.",
      negativeEffects: "Tinggi kalori dan lemak.",
    },
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setUploadedFile(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://ccfb-34-45-185-3.ngrok-free.app/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;
      if (data.success) {
        setStatus("File berhasil diproses!");
        const labelData = labelDescriptions[data.label];
        if (labelData) {
          setPredictedLabel(labelData.label);
          setDescription(labelData.description);
          setIngredients(labelData.ingredients);
          setPositiveEffects(labelData.positiveEffects);
          setNegativeEffects(labelData.negativeEffects);
          setImageUrl(labelData.imageUrl);
        }
      } else {
        setStatus("File gagal diproses!");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Terjadi kesalahan saat memproses file!");
    }
  };

  return (
    <section className="bg-[#FFF5EC] py-12" id="process">
      <div className="container mx-auto flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold text-[#FE765E] mb-6 text-center">
          Silahkan Upload File Untuk Proses Data
        </h2>
        {/* Bagian kiri: Upload File */}
        <div className="w-full max-w-md bg-[#FE765E] p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-[#FFFFFF] mb-4">
            Upload Files
          </h2>
          <input
            type="file"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
          />

          <div id="status" className="text-sm text-[#FFFFFF] mt-2 text-center">
            {status}
          </div>
        </div>

        {/* Bagian kanan: Prediksi Label dan Deskripsi */}
        {uploadedFile && (
          <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg mt-6">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold text-[#1E174C]">RESULT</h2>
              <h3 className="text-2xl text-[#FE765E]">{predictedLabel}</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <img
                  src={uploadedFile}
                  alt="Uploaded"
                  className="max-w-full h-auto mb-4"
                  style={{ maxHeight: "300px" }}
                />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="font-bold text-xl mb-2 text-center">
                  Ingredients
                </div>
                <p className="text-gray-700 text-base">{ingredients}</p>
                <div className="font-bold text-xl mb-2 text-center mt-4">
                  Dampak Positif
                </div>
                <p className="text-gray-700 text-base">{positiveEffects}</p>
                <div className="font-bold text-xl mb-2 text-center mt-4">
                  Dampak Negatif
                </div>
                <p className="text-gray-700 text-base">{negativeEffects}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
