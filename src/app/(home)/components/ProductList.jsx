"use client";
import React, { useState, useEffect } from "react";
import { FaCheck, FaHeart } from "react-icons/fa";
import { BsFilter, BsToggle2On } from "react-icons/bs";
import { MdSort } from "react-icons/md";
import FilterSidebar from "./FilterSidebar";
import Image from "next/image";
import ToggleFilter from "./ToggleFilter";

import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

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
  function sortPriceHighToLow() {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  }
  function sortPriceLowToHigh() {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  }
  function filterToPopular() {
    const sortedProducts = [...products].sort(
      (a, b) => b.rating.rate - a.rating.rate
    );
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
            <FilterSidebar filterMethod={filterMethod} />
          </div>
        )}

        {/* Product List Section */}
        <div
          className={`w-full ${
            filterIsHidden ? "md:w-full" : "md:w-[75%]"
          } p-4`}
        >
          {/* Filter and Sort for Mobile */}
          <div className="flex justify-around items-center md:hidden mb-4 bg-white border-t border-b">
            <button
              className="flex items-center gap-2  p-2 text-[#252020] font-extrabold text-[14px]"
              onClick={handleFilterToggle}
              
            >
              FILTER
            </button>
            <button
              className="text-[20px] text-[#E5E5E5]"
            >
              |
            </button>
            <button
              className="flex items-center gap-2 font-extrabold p-2 text-[#252020] text-[14px]"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              RECOMMENDED
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-60 w-60 bg-white border rounded shadow-lg">
                <ul className="text-left">
                  <li className="px-4 py-2 text-black  cursor-pointer hover:bg-gray-100 flex items-center gap-2">
                    <FaCheck /> RECOMMENDED
                  </li>
                  <li
                    className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
                    onClick={() => alert("Not available")}
                  >
                    NEWEST FIRST
                  </li>
                  <li
                    className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      filterToPopular();
                      setIsOpen((prev) => !prev);
                    }}
                  >
                    POPULAR
                  </li>
                  <li
                    className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
                    onClick={sortPriceLowToHigh}
                  >
                    PRICE: LOW TO HIGH
                  </li>
                  <li
                    className="px-4 py-2 text-black cursor-pointer hover:bg-gray-100"
                    onClick={sortPriceHighToLow}
                  >
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
                  <div
                    key={product.id}
                    className="bg-white  p-4 shadow rounded duration-700 "
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="h-32 mx-auto mb-4 md:h-[399px] md:w-[300px]"
                      height={399}
                      width={300}
                    />

                    <div className="flex justify-between">
                    <p className="text-sm text-black font-bold text-[24px]">
                      {product.title.length > 17
                        ? `${product.title.substring(0, 17)}...`
                        : product.title}
                    </p>

                    <button
                        className={`text-[24px] ${
                          favorites[product.id] ? "text-red-500" : ""
                        }md:hidden`}
                        onClick={() => toggleFavorite(product.id)}
                      >
                        {favorites[product.id] ? <GoHeartFill /> : <GoHeart />}
                      </button>
                    </div>
                 
                    <div className="flex justify-between  mt-2">
                      <button className="text-sm  text-[10px] text-[#888792]">
                        <u>Sign in</u> or Create an account to see pricing
                      </button>
                      <button
                        className={`text-[24px] ${
                          favorites[product.id] ? "text-red-500" : ""
                        }md:block hidden`}
                        onClick={() => toggleFavorite(product.id)}
                      >
                        {favorites[product.id] ? <GoHeartFill /> : <GoHeart />}
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
