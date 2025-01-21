import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCartIcon, FireIcon } from '@heroicons/react/24/solid';

const OneProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchOne = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOne();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold">Načítavam...</h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-8 min-h-dvh bg-base-200">
      <div className="card w-96 h-3/6 bg-base-100 shadow-xl">
        <figure className="p-6">
          <img 
            src="https://www.aerial-direct.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/01/Phone-Range-Placeholder.png.webp" 
            alt="Product placeholder" 
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl mb-2">{product.name}</h2>
          <p className="text-lg">
            Price: <span className="font-semibold">{product.price} €</span>
          </p>
          <p>Year: {product.year}</p>
          <p className="mb-4">Popularity: {product.popularity}</p>
          
          <div className="card-actions justify-end flex flex-wrap gap-2">
            <button
              className="btn btn-secondary gap-2"
              onClick={() => navigate(-1)}
            >
              Späť
              <FireIcon className="h-5 w-5" />
            </button>

            <button className="btn btn-primary gap-2">
              Kúpiť 
              <ShoppingCartIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
