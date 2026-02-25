import {Link, Outlet} from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <h1>My React App</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/data">Data</Link>
          </li>
        </ul>
      </nav>

      <hr/>

      {/* tempat render halaman */}
      <Outlet/>

    </>
  )
}

export default App