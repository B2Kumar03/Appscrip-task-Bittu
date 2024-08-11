import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterSidebar = ({ filterMethod }) => {
  const [expandedSections, setExpandedSections] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const isSelected = prevSelectedOptions.includes(option);
      const newSelectedOptions = isSelected
        ? prevSelectedOptions.filter((item) => item !== option)
        : [...prevSelectedOptions, option];

      filterMethod(newSelectedOptions);
      return newSelectedOptions;
    });
  };

  return (
    <div className="space-y-4">
      {/* Customizable */}
      <div>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="font-bold">CUSTOMIZABLE</span>
        </label>
      </div>

      {/* Ideal For */}
      <hr />
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("idealFor")}
        >
          <span>IDEAL FOR</span>
          {expandedSections.idealFor ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <p>All</p>
        {expandedSections.idealFor && (
          <div className="ml-4 mt-2 space-y-2">
            <p
              className="text-[#ccc] underline cursor-pointer"
              onClick={() => {
                setSelectedOptions([]);
                filterMethod([]);
              }}
            >
              Unselect all
            </p>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedOptions.includes("men")}
                onChange={() => handleCheckboxChange("men")}
              />
              <span>Men</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedOptions.includes("women")}
                onChange={() => handleCheckboxChange("women")}
              />
              <span>Women</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedOptions.includes("kids")}
                onChange={() => handleCheckboxChange("kids")}
              />
              <span>Baby & Kids</span>
            </label>
          </div>
        )}
      </div>

      {/* Occasion */}
      <hr />
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("occasion")}
        >
          <span>OCCASION</span>
          {expandedSections.occasion ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.occasion && <div className="ml-4 mt-2"></div>}
      </div>
      <p>All</p>
      <hr />
      {/* Work */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("work")}
        >
          <span>WORK</span>
          {expandedSections.work ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.work && <div className="ml-4 mt-2"></div>}
      </div>
      <p>All</p>
      <hr />
      {/* Fabric */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("fabric")}
        >
          <span>FABRIC</span>
          {expandedSections.fabric ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.fabric && <div className="ml-4 mt-2"></div>}
      </div>
      <p>All</p>
      <hr />
      {/* Segment */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("segment")}
        >
          <span>SEGMENT</span>
          {expandedSections.segment ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.segment && <div className="ml-4 mt-2"></div>}
      </div>
      <p>All</p>
      <hr />
      {/* Suitable For */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("suitableFor")}
        >
          <span>SUITABLE FOR</span>
          {expandedSections.suitableFor ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.suitableFor && <div className="ml-4 mt-2"></div>}
      </div>
      <p>All</p>
      <hr />
      {/* Raw Materials */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("rawMaterials")}
        >
          <span>RAW MATERIALS</span>
          {expandedSections.rawMaterials ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.rawMaterials && <div className="ml-4 mt-2"></div>}
      </div>
      <p>All</p>
      <hr />
      {/* Pattern */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer font-bold"
          onClick={() => toggleSection("pattern")}
        >
          <span>PATTERN</span>
          {expandedSections.pattern ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.pattern && <div className="ml-4 mt-2"></div>}
      </div>
      <p>All</p>
      <hr />
    </div>
  );
};

export default FilterSidebar;
