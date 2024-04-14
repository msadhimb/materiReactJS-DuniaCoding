import React, { useEffect, useState } from "react";

const Addition = () => {
  const [angka1, setAngka1] = useState(0);
  const [angka2, setAngka2] = useState(0);
  const [hasil, setHasil] = useState(0);

  useEffect(() => {
    const penjumlahan = parseInt(angka1) + parseInt(angka2);
    setHasil(penjumlahan);
  }, [angka1, angka2]);

  useEffect(() => {
    document.title = `Hasil: ${hasil}`;

    return () => {
      document.title = "React + Vite";
    };
  }, [hasil]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <input
        type="number"
        placeholder="angka 1"
        onChange={(e) => setAngka1(e.target.value)}
      />
      <p className="mx-5">+</p>
      <input
        type="number"
        placeholder="angka 2"
        onChange={(e) => setAngka2(e.target.value)}
      />
      <p className="mx-5">=</p>
      <input type="number" disabled placeholder="hasil" value={hasil} />
    </div>
  );
};

export default Addition;
