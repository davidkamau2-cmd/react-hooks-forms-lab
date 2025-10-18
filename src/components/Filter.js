import React from "react";

function Filter({ onCategoryChange, search, onSearchChange }) {
  function handleCategoryChange(e) {
    if (onCategoryChange) onCategoryChange(e.target.value);
  }

  function handleSearchChange(e) {
    if (onSearchChange) onSearchChange(e.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />

      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
