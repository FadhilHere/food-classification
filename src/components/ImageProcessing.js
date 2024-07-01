import React, { useState } from "react";
import axios from "axios";

export default function ImageProcessing() {
  const [predictedLabel, setPredictedLabel] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");

  const labelDescriptions = {
    0: {
      label: "Baked Potato",
      description:
        "Baked potato adalah kentang panggang yang lezat dengan bumbu dan topping.",
    },
    1: {
      label: "Burger",
      description:
        "Burger adalah sandwich yang terdiri dari satu atau lebih patty daging cincang, biasanya daging sapi, ditempatkan di dalam roti yang dibelah dua.",
    },
    2: {
      label: "Crispy Chicken",
      description:
        "Crispy chicken adalah hidangan ayam yang dilapisi tepung dan digoreng.",
    },
    3: {
      label: "Donut",
      description:
        "Donut adalah kue berbentuk cincin yang digoreng dan biasanya diberi hiasan gula atau cokelat.",
    },
    4: {
      label: "Fries",
      description: "Fries adalah potongan kentang yang digoreng hingga renyah.",
    },
    5: {
      label: "Hot Dog",
      description: "Hot dog adalah sosis yang disajikan di dalam roti panjang.",
    },
    6: {
      label: "Pizza",
      description:
        "Pizza adalah roti pipih bundar yang dipanggang dengan berbagai topping.",
    },
    7: {
      label: "Sandwich",
      description:
        "Sandwich adalah dua potong roti yang diisi dengan berbagai macam bahan makanan.",
    },
    8: {
      label: "Taco",
      description:
        "Taco adalah hidangan tradisional Meksiko yang terdiri dari tortilla yang dilipat atau digulung dengan isian.",
    },
    9: {
      label: "Taquito",
      description:
        "Taquito adalah tortilla kecil yang digulung dan diisi dengan daging atau bahan lainnya.",
    },
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setUploadedFile(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://9881-104-155-208-228.ngrok-free.app/predict",
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
    <section className="bg-[#FE765E] py-12" id="process">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        {/* Bagian kiri: Upload File */}
        <div className="w-full md:w-1/2 bg-white p-4 rounded shadow-md mt-[150px] mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-[#1E174C] mb-4">
            Upload Files
          </h2>
          <input
            type="file"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
          />
          <div id="status" className="text-sm text-gray-700 mt-2">
            {status}
          </div>
        </div>

        {/* Bagian kanan: Prediksi Label dan Deskripsi */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-[150px]">
          {uploadedFile && (
            <img
              src={uploadedFile}
              alt="Uploaded"
              className="max-w-full h-auto mb-4"
              style={{ maxHeight: "500px" }}
            />
          )}
          {predictedLabel && (
            <div className="ml-4 bg-white p-4 rounded shadow-md w-full flex flex-col md:flex-row">
              {/* <img alt={predictedLabel} className="w-24 h-24 mr-4" /> */}
              <div>
                <h2 className="text-2xl font-bold text-[#1E174C]">
                  {predictedLabel}
                </h2>
                <p className="text-lg text-left text-gray-700">{description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
