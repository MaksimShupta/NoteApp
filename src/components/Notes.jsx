import { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";

const Notes = () => {
  const getAllItemsFromLocalStorage = () => {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      items[key] = JSON.parse(value);
    }
    return items;
  };

  const allItems = getAllItemsFromLocalStorage();
  console.log(
    "Category:",
    Object.values(allItems).map((e) => e.category)
  );
  return (
    <div
      id="items-list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
    >
      {Object.values(allItems).map((item) => (
        <NoteCard
          key={item.id} // React key remains for rendering list
          itemKey={item.id} // Pass the key explicitly as a prop to NoteCard
          title={item.title}
          date={item.date}
          category={item.category}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Notes;
