import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [rate, setRate] = useState(0);
  const [count, setCount] = useState(0);
  const [rating, setRating] = useState({ rate, count });

  let navigate = useNavigate();

  const formSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:9000/products", {
      method: "POST",
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
      <h1>Add New Product</h1>
      <form onSubmit={formSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="Enter The Title"
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
  );
}

export default EditProduct;
