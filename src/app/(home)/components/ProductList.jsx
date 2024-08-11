'use client'
import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { BsFilter } from 'react-icons/bs';
import { MdSort } from 'react-icons/md';
import FilterSidebar from './FilterSidebar';
import Image from 'next/image';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({}); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <div className="flex max-w-screen-xl mx-auto flex-col md:flex-row">
      {/* Filter Section */}
      <div className="md:w-1/4 bg-gray-100 p-4 hidden md:block">
        <FilterSidebar />
      </div>

      {/* Product List Section */}
      <div className="w-full md:w-3/4 p-4">
        {/* Filter and Sort for Mobile */}
        <div className="flex justify-between items-center md:hidden mb-4">
          <button className="flex items-center gap-2 bg-gray-200 p-2 rounded">
            <BsFilter /> Filter
          </button>
          <button className="flex items-center gap-2 bg-gray-200 p-2 rounded">
            <MdSort /> Recommended
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow rounded">
              <Image src={product.image} alt={product.title} className="h-32 mx-auto mb-2" height={100} width={100} />
              <h3 className="text-sm font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-gray-500">${product.price}</p>
              <div className="flex justify-between items-center mt-2">
                <button
                  className={`text-gray-500 ${favorites[product.id] ? 'text-red-500' : ''}`}
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
  );
};

export default ProductList;
