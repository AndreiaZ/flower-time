import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="read-the-docs">hello</p>
      <table id="myTable" border="5" style={{ width: "100%", height: "300px" }}>
        <tr>
          <th style={{ width: "10%" }}>id</th>
          <th style={{ width: "20%" }}>Name</th>
          <th style={{ width: "20%" }}>Image</th>
          <th style={{ width: "10%" }}>Type</th>
          <th style={{ width: "10%" }}>Is Healthy</th>
          <th style={{ width: "20%" }}>Last Time Watered</th>
          <th style={{ width: "10%" }}>Actions</th>
        </tr>
        <tr style={{ height: "100px" }}>
          <td>1</td>
          <td>Lemon Tree</td>
          <td>
            <img
              src="https://plantsexpress.com/cdn/shop/products/Meyer-lemon-tree-3.jpg?v=1684512306&width=1946"
              alt="Lemon Tree"
              style={{ width: "100px", height: "auto" }}
            />
          </td>
          <td>Tree</td>
          <td>Yes</td>
          <td>26 August</td>
          <td>Edit/Delete</td>
        </tr>
        <tr style={{ height: "100px" }}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  );
}

export default App;
