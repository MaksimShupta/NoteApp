import { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";

const Notes = () => {
  const [notes, setNotes] = useState({});
  const getAllItemsFromLocalStorage = () => {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const value = JSON.parse(localStorage.getItem(key)); // Try parsing JSON
        if (value) items[key] = value;
      } catch (error) {
        console.error(`Error parsing item ${key}:`, error);
      }
    }
    return items;
  };

  //const allItems = getAllItemsFromLocalStorage();
  useEffect(() => {
    const allNotes = getAllItemsFromLocalStorage();
    console.log("Loaded notes from localStorage:", allNotes);
    setNotes(allNotes); // Load data on mount
  }, []);
  console.log(
    "Category:",
    Object.values(notes).map((e) => e.category)
  );

  const onDelete = (key) => {
    console.log("Delete form LS:", key);
    if (!key) return; // Prevent errors

    localStorage.removeItem(key); // Remove from localStorage
    setNotes((prevNotes) => {
      const updatedNotes = { ...prevNotes };
      delete updatedNotes[key]; // Remove from state
      return updatedNotes; // Update state
    });
  };
  const onEdit = () => {};

  return (
    <div
      id="items-list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
    >
      {Object.values(notes).map((item) => (
        <NoteCard
          key={item.id} // React key remains for rendering list
          itemKey={item.id} // Pass the key explicitly as a prop to NoteCard
          title={item.title}
          date={item.date}
          category={item.category}
          description={item.description}
          onEdit={() => onEdit(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </div>
  );
};

export default Notes;
