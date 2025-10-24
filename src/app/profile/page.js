import React from "react";
import Menu from "../components/menu";

const page = async ({ searchParams }) => {
  const params = await searchParams;
  return (
    <div>
      <Menu />
      <h2 className="flex justify-center font-bold text-3xl text-blue-900 m-2">
        Profile
      </h2>
      <p className="text-xl font-bold">Name: {params.name}</p>
      <p className="text-xl">Designation: {params.designation}</p>
      <img src="/images/nature.jpg" alt="image" />
    </div>
  );
};

export default page;
