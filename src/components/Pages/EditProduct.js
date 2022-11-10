import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const [product, setProduct] = useState();
  let { productID } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [rate, setRate] = useState(0);
  const [count, setCount] = useState(0);
  const [rating, setRating] = useState({ rate, count });

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  const formSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:9000/products/${productID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        category,
        image,
        price,
        rating: {
          rate,
          count,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => navigate("/products"));
  };
  return (
    <>
      {product && (
        <>
          <h1>Add New Product</h1>
          <form onSubmit={formSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="productTitle"
                placeholder="Enter The Title"
                defaultValue={product.title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <label htmlFor="productTitle">Title</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="productDescription"
                placeholder="Enter The Description"
                defaultValue={product.description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <label htmlFor="productDescription">Description</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="productCategory"
                placeholder="Enter The Category"
                defaultValue={product.category}
                onChange={(event) => setCategory(event.target.value)}
              />
              <label htmlFor="productCategory">Category</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="url"
                className="form-control"
                id="productImage"
                placeholder="Enter The Image"
                defaultValue={product.image}
                onChange={(event) => setImage(event.target.value)}
              />
              <label htmlFor="productImage">Image</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                step={0.01}
                className="form-control"
                id="productPrice"
                placeholder="Enter The Price"
                defaultValue={product.price}
                onChange={(event) => setPrice(+event.target.value)}
              />
              <label htmlFor="productPrice">Price</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                step={0.01}
                className="form-control"
                id="productRate"
                placeholder="Enter The Rate"
                defaultValue={product.rating.rate}
                onChange={(event) => setRate(+event.target.value)}
              />
              <label htmlFor="productRate">Rate</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                step={0.01}
                className="form-control"
                id="productNumberRates"
                placeholder="Enter The Number Rates"
                defaultValue={product.rating.count}
                onChange={(event) => setCount(+event.target.value)}
              />
              <label htmlFor="productNumberRates">Number Rates</label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary col-4 mt-3 mb-5">
                Edit Product
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default EditProduct;
