import React, { useState, useEffect, useCallback, useRef } from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import debounce from "lodash.debounce";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    minYear: 1997,
    maxYear: 2025,
    minPrice: 10,
    maxPrice: 500,
  });

  const debouncedFetch = useRef(
    debounce((updatedFilters) => {
      fetchProducts(updatedFilters);
    }, 500)
  ).current;

  const fetchProducts = useCallback(
    async (updatedFilters = filters) => {
      try {
        const query = new URLSearchParams({
          page: page.toString(),
          limit: "10",
          sort: "year",
          order: "desc",
          minYear: updatedFilters.minYear.toString(),
          maxYear: updatedFilters.maxYear.toString(),
          minPrice: updatedFilters.minPrice.toString(),
          maxPrice: updatedFilters.maxPrice.toString(),
        }).toString();

        const response = await fetch(
          `http://localhost:3001/api/products?${query}`
        );
        const data = await response.json();

        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    [page]
  );

  const handleSliderChange = (type, newValue) => {
    const updatedFilters = { ...filters };
    if (type === "yearRange") {
      updatedFilters.minYear = newValue[0];
      updatedFilters.maxYear = newValue[1];
    } else if (type === "priceRange") {
      updatedFilters.minPrice = newValue[0];
      updatedFilters.maxPrice = newValue[1];
    }
    setFilters(updatedFilters);
    debouncedFetch(updatedFilters);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, page]);

  useEffect(() => {
    return () => {
      debouncedFetch.cancel();
    };
  }, [debouncedFetch]);

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-6xl">
        <Sidebar filters={filters} onSliderChange={handleSliderChange} />
        <MainContent
          products={products}
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default ProductList;
