import React from "react";
import Menu from "./components/menu";

const page = () => {
  return (
    <div>
      <Menu />
      <h1 className="flex justify-center mt-20 text-2xl text-secondary">
        This is Home Page
      </h1>
      <div className="flex justify-center items-center h-screen">
        <img
          src="/images/nature.jpg"
          alt="image"
          className="w-200 h-100 object-cover rounded"
        />
      </div>
    </div>
  );
};

export default page;
