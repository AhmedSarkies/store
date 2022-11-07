import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState();
  let { productID } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <>
      {product && (
        <div className="container fw-bold">
          <h1>{product.title}</h1>
          <img className="product-image" src={product.image} alt={product.title} />
          <div className="product-body">
            <p>{product.description}</p>
            <p>{product.price} $</p>
            <p className="text-black-50 fw-normal">Rates: {product.rating.rate}</p>
            <p className="text-black-50 fw-normal">Number Rates: {product.rating.count}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
