import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './FilterSidebar.css'; // Import the CSS file

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
    <div className="filter-sidebar">
      <div className="filter-item">
        <label className="filter-label">
          <input type="checkbox" className="filter-checkbox" />
          <span className="filter-title">CUSTOMIZABLE</span>
        </label>
      </div>

      <hr className="filter-divider" />
      <div className="filter-item">
        <div
          className="filter-header"
          onClick={() => toggleSection("idealFor")}
        >
          <span>IDEAL FOR</span>
          {expandedSections.idealFor ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        <p>All</p>
        {expandedSections.idealFor && (
          <div className="filter-options">
            <p
              className="filter-unselect"
              onClick={() => {
                setSelectedOptions([]);
                filterMethod([]);
              }}
            >
              Unselect all
            </p>
            <label className="filter-label">
              <input
                type="checkbox"
                className="filter-checkbox"
                checked={selectedOptions.includes("men")}
                onChange={() => handleCheckboxChange("men")}
              />
              <span>Men</span>
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                className="filter-checkbox"
                checked={selectedOptions.includes("women")}
                onChange={() => handleCheckboxChange("women")}
              />
              <span>Women</span>
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                className="filter-checkbox"
                checked={selectedOptions.includes("kids")}
                onChange={() => handleCheckboxChange("kids")}
              />
              <span>Baby & Kids</span>
            </label>
          </div>
        )}
      </div>

      <hr  />
      <div className="filter-item">
        <div
          className="filter-header"
          onClick={() => toggleSection("occasion")}
        >
          <span>OCCASION</span>
          {expandedSections.occasion ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.occasion && <div className="filter-options"></div>}
      </div>
      <p>All</p>
      <hr className="filter-divider" />
      <div className="filter-item">
        <div className="filter-header" onClick={() => toggleSection("work")}>
          <span>WORK</span>
          {expandedSections.work ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.work && <div className="filter-options"></div>}
      </div>
      <p>All</p>
      <hr className="filter-divider" />
      <div className="filter-item">
        <div className="filter-header" onClick={() => toggleSection("fabric")}>
          <span>FABRIC</span>
          {expandedSections.fabric ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.fabric && <div className="filter-options"></div>}
      </div>
      <p>All</p>
      <hr className="filter-divider" />
      <div className="filter-item">
        <div className="filter-header" onClick={() => toggleSection("segment")}>
          <span>SEGMENT</span>
          {expandedSections.segment ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.segment && <div className="filter-options"></div>}
      </div>
      <p>All</p>
      <hr className="filter-divider" />
      <div className="filter-item">
        <div
          className="filter-header"
          onClick={() => toggleSection("suitableFor")}
        >
          <span>SUITABLE FOR</span>
          {expandedSections.suitableFor ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.suitableFor && <div className="filter-options"></div>}
      </div>
     
      <p>All</p>
      <hr className="filter-divider" />
      <div className="filter-item">
        <div
          className="filter-header"
          onClick={() => toggleSection("rawMaterials")}
        >
          <span>RAW MATERIALS</span>
          {expandedSections.rawMaterials ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.rawMaterials && <div className="filter-options"></div>}
      </div>
      <p>All</p>
      <hr className="filter-divider" />
      <div className="filter-item">
        <div className="filter-header" onClick={() => toggleSection("pattern")}>
          <span>PATTERN</span>
          {expandedSections.pattern ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {expandedSections.pattern && <div className="filter-options"></div>}
      </div>
      <p>All</p>
      <hr className="filter-divider" />
    </div>
  );
};

export default FilterSidebar;
