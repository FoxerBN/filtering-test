import React from "react";
import { Link } from "react-router-dom";
const ProductGrid = ({ products }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <Link to={`/one/${product._id}`}>
      <li key={product.id} className="card max-w-72 bg-base-300 shadow-xl">
        <figure>
          <img
            src="https://www.aerial-direct.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/01/Phone-Range-Placeholder.png.webp"
            alt="Smartphone placeholder"
            className="h-64 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-gray-300">{product.name}</h2>
          <p className="text-gray-400">
            ${product.price} <span className="text-sm">({product.year})</span>
          </p>
        </div>
      </li>
      </Link>
    ))}
  </ul>
);

export default ProductGrid;
