import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const Fruit = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="flex justify-center items-center h-screen w-full flex-col">
      <p className="my-5">{selectedOption || "Belum Memilih Option"}</p>
      <Select
        options={options}
        className="w-64"
        onChange={(e) => setSelectedOption(e.label)}
      />
      <div className="flex gap-3 mt-5">
        <Link className="bg-blue-300 px-3 py-2 text-white" to={"/"}>
          Ke Halaman Utama
        </Link>
      </div>
    </div>
  );
};

export default Fruit;
