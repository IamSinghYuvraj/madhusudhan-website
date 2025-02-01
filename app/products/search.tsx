"use client"; // Mark this as a Client Component

import { useState } from "react";

// List of products (replace with your actual data)
const products = [
  "Activated-Carbon-Water-Filter",
  "Auto-FRP-Two-Bed-DM-Water-Plants",
  "Blowing-Machine",
  "Chemical-Dosing-System",
  "Commercial-Reverse-Osmosis-Plant",
  "Commercial-Water-Treatment-Plant",
  "Deionisation-Plant",
  "DM-Water-Plants",
  "FRP-De-Gasification-Systems",
  "FRP-RO-Plant",
  "Fully-Auto-Jar-Rinsing-Filling-Capping-Machine",
  "Linear-Auto-Cup-Rinsing-Filling-Sealing-Machine",
  "Mild-Steel-Rubber-Lined-Two-Bed-DM-Water-Plants",
  "Mineral-Water-Filling-Machines",
  "Mineral-Water-Jar-Filling-Machine",
  "Mineral-Water-Plants",
  "Mixed-Bed-DM-Plant",
  "Mixed-Bed-FRP-DM-Plants",
  "Packaged-Drinking-Water-Plant",
  "Packaging-Solution-For-Mineral-Water",
  "Pouches-Filling-Machine",
  "Rapid-Flow-Two-Bed-DM-Plants",
  "Reverse-Osmosis-Plant",
  "Sand-Water-Filter",
  "Semi-Auto-Blow-Molding-Machine",
  "Semi-Auto-Jar-Rinsing-Filling-Capping-Machine",
  "Ultraviolet-Water-Systems",
  "Water-Bottle-Filling-Machines",
  "Water-Bottle-Washing-Machine",
  "Water-Chlorination-Plant",
  "Water-Demineralisation-Plant",
  "Water-Softening-Plant",
  "Water-Treatment-System",
  "Water-Ultrafiltration-System",
];

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [suggestions, setSuggestions] = useState<string[]>([]); // State for search suggestions
  const [error, setError] = useState(""); // State for error messages

  // Handle search input changes
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSuggestions([]); // Clear suggestions if the query is empty
      setError(""); // Clear error message
      return;
    }

    // Filter products based on the query
    const matchedProducts = products.filter((product) =>
      product.toLowerCase().includes(query.toLowerCase())
    );

    if (matchedProducts.length > 0) {
      setSuggestions(matchedProducts); // Show suggestions
      setError(""); // Clear error message
    } else {
      setSuggestions([]); // Clear suggestions
      setError("No matching product found. Please check your spelling or try a different name!"); // Show error message
    }
  };

  // Handle product selection (from suggestions or pressing Enter)
  const handleProductSelect = (product: string) => {
    setSearchQuery(product); // Set the selected product in the search bar
    setSuggestions([]); // Clear suggestions
    setError(""); // Clear error message
    // TODO: Display only the selected product's card
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && searchQuery.trim() !== "") {
            handleProductSelect(searchQuery);
          }
        }}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Search Suggestions */}
      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          {suggestions.map((product, index) => (
            <div
              key={index}
              onClick={() => handleProductSelect(product)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {product}
            </div>
          ))}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-2 text-sm text-red-600">
          {error}
        </div>
      )}
    </div>
  );
}