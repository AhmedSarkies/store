import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul className="col-2 list-unstyled sidebar container">
        <li className="">
          <Link
            className="text-decoration-none btn text-white col-12 pt-2 pb-2"
            to="/src/components/"
          >
            get all products
          </Link>
        </li>
        <li className="mt-2">
          <Link
            className="text-decoration-none btn text-white col-12 pt-2 pb-2"
            to="/"
          >
            get all categories
          </Link>
        </li>
      </ul>
    </>
  );
}
export default Sidebar;
