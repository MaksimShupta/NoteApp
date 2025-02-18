import NoteCard from "./NoteCard";
import { useState, useEffect } from "react";

let items;

const Notes = ({ addToCart }) => {
  const [items, setItems] = useState([]);

  return (
    <div
      id="items-list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
    >
      {items.map((item) => (
        <NoteCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Notes;
