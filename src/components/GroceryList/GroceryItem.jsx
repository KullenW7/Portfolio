import React from "react";

export default function GroceryItem({ item, removeItem }) {
  return (
    <li>
      {item.name} - {item.quantity}
      <button onClick={() => removeItem(item.id)}>❌</button>
    </li>
  );
}
