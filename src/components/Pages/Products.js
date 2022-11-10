import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Products() {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are You Sure To Delete ${product.title} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => getAllProducts());
      }
    });
  };
  return (
    <>
      <h1>Products Page</h1>
      <Link className="btn btn-success mt-3" to={"/products/add"}>
        Add New Product
      </Link>
      <table className="table table-striped mt-5 mb-5">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const { id, title, description, price } = product;
            return (
              <tr className="text-center" key={id}>
                <td>{id}</td>
                <td>{title.slice(0, 20)}...</td>
                <td>{description.slice(0, 30)}...</td>
                <td>{price}</td>
                <td className="d-flex justify-content-around align-items-center">
                  <Link
                    className="btn btn-info btn-sm"
                    to={`/products/view/${id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-primary btn-sm"
                    to={`/products/edit/${id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;
