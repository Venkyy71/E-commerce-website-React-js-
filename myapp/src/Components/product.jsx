import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product based on the productId
    // Assuming you have an API or a data source
    const fetchProduct = async () => {
      // Replace this with your actual product fetching logic
      const fetchedProduct = await fetch(`/api/products/${productId}`).then(res => res.json());
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      {/* Render product details */}
    </div>
  );
};

export default Product;
