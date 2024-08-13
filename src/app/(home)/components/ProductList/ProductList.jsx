"use client";
import React, { useState, useEffect } from "react";
import { FaCheck, FaHeart } from "react-icons/fa";
import { BsFilter, BsToggle2On } from "react-icons/bs";
import { MdSort } from "react-icons/md";
import FilterSidebar from "../FilterSliderbar/FilterSidebar";
import Image from "next/image";
import ToggleFilter from "../ToggleFilter/ToggleFilter";
import { GoHeart, GoHeartFill } from "react-icons/go";
import './ProductList.css';


// Skeleton Loader Component
const ProductSkeleton = () => (
  <div className="product-skeleton">
    <div className="skeleton-image"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-footer">
      <div className="skeleton-price"></div>
      <div className="skeleton-button"></div>
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
      <ToggleFilter
        filterIsHidden={filterIsHidden}
        total_product={products.length}
        handleFilterToggle={handleFilterToggle}
        sortPriceLowToHigh={sortPriceLowToHigh}
        sortPriceHighToLow={sortPriceHighToLow}
        filterToPopular={filterToPopular}
      />
      <div className="product-list-container ">
        {!filterIsHidden && (
          <div className="filter-sidebar">
            <FilterSidebar filterMethod={filterMethod} />
          </div>
        )}

        <div className={`product-list ${filterIsHidden ? "full-width" : "partial-width"} `}>
          <div className="mobile-filter-menu">
            <button
              className="filter-button"
              
            >
              FILTER
            </button>
            <button className="divider">|</button>
            <button
              className="recommended-button"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              RECOMMENDED
            </button>
            {isOpen && (
              <div className="recommendation-menu">
                <ul>
                  <li className="menu-item active">
                    <FaCheck /> RECOMMENDED
                  </li>
                  <li
                    className="menu-item"
                    onClick={() => alert("Not available")}
                  >
                    NEWEST FIRST
                  </li>
                  <li
                    className="menu-item"
                    onClick={() => {
                      filterToPopular();
                      setIsOpen((prev) => !prev);
                    }}
                  >
                    POPULAR
                  </li>
                  <li
                    className="menu-item"
                    onClick={sortPriceLowToHigh}
                  >
                    PRICE: LOW TO HIGH
                  </li>
                  <li
                    className="menu-item"
                    onClick={sortPriceHighToLow}
                  >
                    PRICE: HIGH TO LOW
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className={`product-grid ${filterIsHidden ? "grid-cols-4" : "grid-cols-3"}`}>
            {loading
              ? Array(6)
                  .fill()
                  .map((_, index) => <ProductSkeleton key={index} />)
              : products.map((product) => (
                  <div key={product.id} className="product-card">
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                      height={399}
                      width={300}
                    />
                    <div className="product-header">
                      <p className="product-title">
                        {product.title.length > 17
                          ? `${product.title.substring(0, 17)}...`
                          : product.title}
                      </p>
                      <button
                        className={`favorite-button-mobile ${favorites[product.id] ? "favorite" : ""}`}
                        onClick={() => toggleFavorite(product.id)}
                      >
                        {favorites[product.id] ? <GoHeartFill /> : <GoHeart />}
                      </button>
                    </div>
                    <div className="product-footer">
                      <button className="signin-message">
                        <u>Sign in</u> or Create an account to see pricing
                      </button>
                      <button
                        className={`favorite-button-desktop ${favorites[product.id] ? "favorite" : ""}`}
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
