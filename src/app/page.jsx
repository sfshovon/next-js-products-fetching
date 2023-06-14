"use client"
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Product from "./Components/Product";
import { fetchProducts } from "./api";
import Loader from "./loading";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const products = await fetchProducts(page);
        setAllProducts((prevProducts) => [...prevProducts, ...(products || [])]);
      } 
      catch (error) {
        console.error("Error:", error);
      }
    }
    fetchAllProducts();
  }, [page]);

  const fetchMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };


  return (
    <main className="p-10">
      <h1 className="text-2xl text-zinc-900 font-extrabold">Products</h1>
      <InfiniteScroll
        dataLength={allProducts.length}
        next={fetchMoreProducts}
        hasMore={true}
        loader={<Loader/>}
        endMessage={<p className="text-red-700 text-5xl text-center font-bold">Nothing to load</p>}
        style={{ overflowY: 'hidden' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 justify-around items-center gap-5">
          {allProducts.map((product) => (
            <Product key={product?.id} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    </main>
  );
}
