import React from "react";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

const MainContent = ({ products, page, totalPages, onPageChange }) => (
  <main className="w-3/4 p-4">
    <ProductGrid products={products} />
    <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
  </main>
);

export default MainContent;
