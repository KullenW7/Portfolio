import React, { useState } from "react";
import GroceryForm from "./GroceryForm";
import GroceryListItems from "./GroceryListItems";
import styles from "./grocery.module.css"; // ✅ Import the module CSS

export default function GroceryList() {
  console.log("Rendering GroceryList");
  const [items, setItems] = useState([]);

  const addItem = (name, quantity) => {
    if (name.trim() && quantity.trim()) {
      setItems([...items, { id: Date.now(), name, quantity }]);
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.container}>
      {" "}
      {/* ✅ Apply module styles */}
      <h1 className={styles.title}>Grocery List</h1>
      <GroceryForm addItem={addItem} />
      <GroceryListItems items={items} removeItem={removeItem} />
    </div>
  );
}
