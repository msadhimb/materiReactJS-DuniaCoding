import React, { useState } from "react";
import Number from "./Number";
import Button from "./Button";
import { Link } from "react-router-dom";

const Content = () => {
  const [count, setCount] = useState(3);

  const handleKurang = () => {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full flex-col">
      <Number className={"text-4xl"}>{count}</Number>
      <div className="flex gap-3 mt-5">
        <Button
          className="bg-green-300 px-3 py-2"
          onClick={() => setCount(count + 1)}
        >
          Tambah
        </Button>
        <Button
          className="bg-red-500 px-3 py-2 text-white"
          onClick={() => handleKurang()}
        >
          Kurang
        </Button>
      </div>
      <div className="flex gap-3 mt-5">
        <Link className="bg-blue-300 px-3 py-2 text-white" to={"/fruit"}>
          Ke Halaman Fruit
        </Link>
      </div>
    </div>
  );
};

export default Content;
