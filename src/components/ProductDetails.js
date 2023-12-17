
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => {
          console.error('Error fetching product details:', error);
          setProduct({});
        });
    }
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>Product Details</h2>
      <div className="card">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={`Thumbnail for ${product.title}`}
          style={{ maxWidth: '300px', margin: 'auto' }}
        />
        <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="card-text">
            <strong>Rating:</strong> {product.rating}
          </p>
          <p className="card-text">
            <strong>Stock:</strong> {product.stock}
          </p>
          <p className="card-text">
            <strong>Brand:</strong> {product.brand}
          </p>
          <p className="card-text">
            <strong>Category:</strong> {product.category}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h4>Images</h4>
        <div className="d-flex justify-content-center">
          {product.images &&
            product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                style={{ width: '150px', margin: '10px' }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
