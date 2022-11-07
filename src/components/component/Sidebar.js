import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul className="list-unstyled sidebar">
        <li className="">
          <Link
            className="text-decoration-none btn text-white col-12 pt-2 pb-2"
            to="/"
          >
            all
          </Link>
        </li>
        <li className="mt-2">
          <Link
            className="text-decoration-none btn text-white col-12 pt-2 pb-2"
            to="/products"
          >
            get all products
          </Link>
        </li>
        <li className="mt-2">
          <Link
            className="text-decoration-none btn text-white col-12 pt-2 pb-2"
            to="/categories"
          >
            get all categories
          </Link>
        </li>
      </ul>
    </>
  );
}
export default Sidebar;
