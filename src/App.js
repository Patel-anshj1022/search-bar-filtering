import React, { useState } from "react";
import SearchBar from "./components/SearchBar";

const products = [
  {
    name: "Apple",
    category: "Fruit",
    description: "A sweet red fruit",
  },
  {
    name: "Banana",
    category: "Fruit",
    description: "A yellow fruit rich in potassium",
  },
  {
    name: "Carrot",
    category: "Vegetable",
    description: "Orange root vegetable good for eyesight",
  },
  {
    name: "Laptop",
    category: "Electronics",
    description: "Portable computer device",
  },
  {
    name: "Camera",
    category: "Electronics",
    description: "Capture photos and videos",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = products.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term)
    );
  });

  return (
    <div className="app">
      <h1>Multi-Field Search</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <ul className="list">
        {filteredList.length ? (
          filteredList.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> <br />
              <em>{item.category}</em> <br />
              <small>{item.description}</small>
            </li>
          ))
        ) : (
          <li className="no-result">No matches found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
