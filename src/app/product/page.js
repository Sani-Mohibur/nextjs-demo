//Client side rendering
"use client";
import React, { useEffect, useState } from "react";
import Menu from "../components/menu";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const page = () => {
  let [products, setProducts] = useState([]);
  const params = useSearchParams();
  const router = useRouter();

  const GoToBrandPage = () => {
    router.push("/product/brand");
  };
  const GoToCategoryPage = () => {
    router.push("/product/category");
  };

  useEffect(() => {
    (async () => {
      let res = await fetch("https://dummyjson.com/products");
      let result = await res.json();
      setProducts(result.products);
    })();
  }, []);

  /*
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("https://dummyjson.com/products");
      let result = await res.json();
      setProducts(result.products);
    };

    fetchData(); 
  }, []);
*/

  return (
    <div>
      <Menu />
      <div className="mx-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 mx-2 my-2 rounded shadow"
          onClick={() => {
            alert("Hello! This is product information page.");
          }}
        >
          Hi!
        </button>
        <p className="font-bold text-white-200 my-4">
          There is a separate{" "}
          <button
            onClick={GoToCategoryPage}
            className="text-blue-800 underline cursor-pointer"
          >
            {params.get("id_1")}
          </button>{" "}
          page. Similarly, a{" "}
          <button
            onClick={GoToBrandPage}
            className="text-blue-800 underline cursor-pointer"
          >
            {params.get("id_2")}
          </button>{" "}
          page as well.
        </p>
        {products.map((item, index) => {
          return (
            <div key={index}>
              <h1 className="font-bold">{item.title}</h1>
              <p className="w-120 whitespace-normal text-justify">
                Description: {item.description}
              </p>
              <p>Brand: {item.brand}</p>
              <p>Rating: {item.rating}</p>
              <p>Price: {item.price}</p>

              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
