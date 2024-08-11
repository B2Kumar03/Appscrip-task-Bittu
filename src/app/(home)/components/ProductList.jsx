"use client";
import React, { useState, useEffect } from "react";
import { FaCheck, FaHeart } from "react-icons/fa";
import { BsFilter, BsToggle2On } from "react-icons/bs";
import { MdSort } from "react-icons/md";
import FilterSidebar from "./FilterSidebar";
import Image from "next/image";
import ToggleFilter from "./ToggleFilter";

// Skeleton Loader Component
const ProductSkeleton = () => (
  <div className="bg-gray-200 p-4 shadow rounded animate-pulse">
    <div className="h-32 bg-gray-300 mb-2"></div>
    <div className="h-4 bg-gray-300 mb-2"></div>
    <div className="h-4 bg-gray-300 mb-2"></div>
    <div className="flex justify-between items-center mt-2">
      <div className="h-5 bg-gray-300 w-8"></div>
      <div className="h-5 bg-gray-300 w-24"></div>
    </div>
  </div>
);

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [filterIsHidden, setFilterIsHidden] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const handleFilterToggle = () => setFilterIsHidden((prev) => !prev);

  const handleMenuToggle = () => setMenuIsOpen(!menuIsOpen);

  function filterMethod(filter) {
    const filteredProducts = products.filter((product) =>
      product.category.includes(filter)
    );
    setProducts(filteredProducts);
  }
  function sortPriceHighToLow(){
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  }
  function sortPriceLowToHigh(){
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  }
  function filterToPopular(){
    const sortedProducts = [...products].sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(sortedProducts);
  }

  return (
    <>
      {/* Toggle filter and Recommendation button */}
      <ToggleFilter
        filterIsHidden={filterIsHidden}
        total_product={products.length}
        handleFilterToggle={handleFilterToggle}
        sortPriceLowToHigh={sortPriceLowToHigh} 
        sortPriceHighToLow={sortPriceHighToLow}
        filterToPopular={filterToPopular}
      />
      <div className="flex lg:max-w-screen-xl w-full mx-auto flex-col md:flex-row">
        {/* Filter Section */}
        {!filterIsHidden && (
          <div className="md:w-1/4 h-[846px] p-4 hidden md:block">
            <FilterSidebar filterMethod={filterMethod}  />
          </div>
        )}

        {/* Product List Section */}
        <div
          className={`w-full ${
            filterIsHidden ? "md:w-full" : "md:w-[75%]"
          } p-4`}
        >
          {/* Filter and Sort for Mobile */}
          <div className="flex justify-between items-center md:hidden mb-4">
            <button
              className="flex items-center gap-2 bg-gray-200 p-2 rounded"
              onClick={handleFilterToggle}
            >
              <BsFilter /> Filter
            </button>
            <button
              className="flex items-center gap-2 bg-gray-200 p-2 rounded"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <MdSort /> Recommended
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-60 w-60 bg-white border rounded shadow-lg" >
                <ul className="text-left" >
                  <li className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100 flex items-center gap-2">
                    <FaCheck /> RECOMMENDED
                  </li>
                  <li className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100" onClick={()=>alert("Not available")} >
                    NEWEST FIRST
                  </li>
                  <li className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100" onClick={()=>{
                    filterToPopular()
                    setIsOpen((prev)=>!prev)

                  }}>
                    POPULAR
                  </li>
                  <li className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100" onClick={sortPriceLowToHigh}>
                    PRICE: LOW TO HIGH
                  </li>
                  <li className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100" onClick={sortPriceHighToLow}>
                    PRICE: HIGH TO LOW
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Product or Skeleton Loader */}
          <div
            className={`grid grid-cols-2 ${
              filterIsHidden ? "md:grid-cols-4" : "md:grid-cols-3"
            } gap-4`}
          >
            {loading
              ? Array(6)
                  .fill()
                  .map((_, index) => <ProductSkeleton key={index} />)
              : products.map((product) => (
                  <div key={product.id} className="bg-white p-4 shadow rounded duration-700">
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="h-32 mx-auto mb-2"
                      height={100}
                      width={100}
                    />
                    <h3 className="text-sm font-semibold mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-500">${product.price}</p>
                    <div className="flex justify-between items-center mt-2">
                      <button
                        className={`text-gray-500 ${
                          favorites[product.id] ? "text-red-500" : ""
                        }`}
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <FaHeart />
                      </button>
                      <button className="text-sm font-semibold text-blue-600">
                        Sign in to see pricing
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
