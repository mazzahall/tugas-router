import {Link, Outlet} from "react-router-dom";

export default function Data() {
  return (
    <div>
      <h1>Halaman Data</h1>

      <nav>
        <ul>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="customers">Customers</Link>
          </li>
          <li>
            <Link to="sellers">Sellers</Link>
          </li>
        </ul>
      </nav>

      <hr/>

      <Outlet/>

    </div>
  );
}