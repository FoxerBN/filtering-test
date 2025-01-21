import React from "react";
import { Slider } from "@mui/material";

const Sidebar = ({ filters, onSliderChange }) => (
  <aside className="w-44 p-4 bg-base-200">
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Filter by Year</h3>
      <Slider
        value={[filters.minYear, filters.maxYear]}
        onChange={(e, newValue) => onSliderChange("yearRange", newValue)}
        valueLabelDisplay="auto"
        min={1997}
        max={2025}
      />
    </div>

    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Filter by Price</h3>
      <Slider
        value={[filters.minPrice, filters.maxPrice]}
        onChange={(e, newValue) => onSliderChange("priceRange", newValue)}
        valueLabelDisplay="auto"
        min={10}
        max={500}
      />
    </div>
  </aside>
);

export default Sidebar;
