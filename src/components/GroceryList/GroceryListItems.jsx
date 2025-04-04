import React from "react";
import GroceryItem from "./GroceryItem";

export default function GroceryListItems({ items, removeItem }) {
  return (
    <ul>
      {items.map((item) => (
        <GroceryItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </ul>
  );
}
