import { useState } from "react";
import "./App.css";
const styles = {
  container: {
    display: "flex",
    width: "100vw",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};
const data = {
  id: 1,
  name: "Lemon Tree",
  imageUrl:
    "https://plantsexpress.com/cdn/shop/products/Meyer-lemon-tree-3.jpg?v=1684512306&width=1946",
  lastTimeWatered: "26 August",
  isHealthy: true,
  type: "tree",
};

function App() {
  return (
    <div style={styles.container}>
      <p style={{ width: "100%" }} className="read-the-docs">
        hello
      </p>
      <table id="myTable" border="5" style={{ height: "100px" }}>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Image</th>
          <th>Type</th>
          <th>Is Healthy</th>
          <th>Last Time Watered</th>
          <th>Actions</th>
        </tr>
        <tr style={{ height: "100px" }}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>
            <img
              src={data.imageUrl}
              alt={data.name}
              style={{ width: "100px", height: "auto" }}
            />
          </td>
          <td>{data.type}</td>
          <td>{data.isHealthy ? "Yes" : "No"}</td>
          <td>{data.lastTimeWatered}</td>
          <td>Edit/Delete</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
