"use client";
import React, { useState, useEffect } from "react";
import { FaCheck, FaHeart } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import { MdSort } from "react-icons/md";
import FilterSidebar from "./FilterSidebar";
import Image from "next/image";
import ToggleFilter from "./ToggleFilter";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [filterIsHidden, setFilterIsHidden] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const handleFilterToggle = () => setFilterIsHidden(!filterIsHidden);

  const handleMenuToggle = () => setMenuIsOpen(!menuIsOpen);
  function filterMethod(filter) {
    let filteredProducts = products.filter((product) => product.category.includes(filter));
    setProducts(filteredProducts);
    console.log(filteredProducts);
  }
  

  return (
    <>
      {/* Toggle filter and Recommendation button */}
      <ToggleFilter
        setFilterIsHidden={setFilterIsHidden}
        total_product={products.length}
        filterIsHidden={filterIsHidden}
      />
      <div className="flex lg:max-w-screen-xl mx-w-[100%] mx-auto flex-col md:flex-row">
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
          } p-4 auto`}
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
              onClick={()=>setIsOpen((prev)=>!prev)}
            >
              <MdSort /> Recommended
            </button>
            {isOpen && (
          <div className='absolute right-0 mt-60 w-60 bg-white border rounded shadow-lg'>
            <ul className='text-left'>
              <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 flex items-center gap-2'>
                <FaCheck /> <h4>RECOMMENDED</h4>
              </li>
              <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 text-right'>
                NEWEST FIRST
              </li>
              <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 text-right'>
                POPULAR
              </li>
              <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 text-right'>
              PRICE: LOW TO HIGH
              </li>
              <li className='px-4 py-2 text-black cursor-pointer hover:bg-gray-100 text-right' >
                PRICE: HIGH TO LOW
              </li>
            </ul>
          </div>
        )}
          </div>

          {/* Conditional rendering of the menu */}
          {menuIsOpen && (
            <div className="absolute top-16 right-0 bg-white shadow-lg p-4 rounded">
              <p>Menu Content</p>
              {/* Add your menu items here */}
            </div>
          )}

          <div
            className={`grid grid-cols-2 md:grid-cols-${
              filterIsHidden ? "4" : "3"
            } gap-4`}
          >
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 shadow rounded">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="h-32 mx-auto mb-2"
                  height={100}
                  width={100}
                />
                <h3 className="text-sm font-semibold mb-2">{product.title}</h3>
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
