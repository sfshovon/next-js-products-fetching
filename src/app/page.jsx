"use client"
import { useEffect, useState } from "react";
import Product from "./Components/Product";
import { fetchProducts } from "./api";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const products = await fetchProducts();
        console.log("Products: ", products);
        setAllProducts(products);
      } 
      catch (error) {
        console.error("Error:", error);
      }
    }
    fetchAllProducts();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-2xl text-zinc-900 font-extrabold">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-around items-center gap-5">
        {allProducts.map((product) => (
          <Product key={product?.id} product={product}/>
        ))}
      </div>
    </main>
  );
}