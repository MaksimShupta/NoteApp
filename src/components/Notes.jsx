import { useState, useEffect, useContext } from "react";
import NoteCard from "../components/NoteCard";
import { useNavigate } from "react-router";
import { CategoryContext } from "../App";

const Notes = ({ searchQuery }) => {
  const [notes, setNotes] = useState({});
  const navigate = useNavigate();
  const [categoryFilter, setCategoryFilter] = useState("");
  const { categories } = useContext(CategoryContext);
  const [filteredNotes, setFilteredNotes] = useState([]);
  //const [searchQuery, setSearchQuery] = useState("");

  const cats = Object.keys(categories || {}).map((key) => ({
    value: key,
    label: key.toUpperCase(),
    icon: <img src={categories[key]} alt={key} className="w-6 h-6" />,
  }));

  const getAllItemsFromLocalStorage = () => {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const value = JSON.parse(localStorage.getItem(key)); // Try parsing JSON
        if (value) items[key] = { ...value, id: key };
      } catch (error) {
        console.error(`Error parsing item ${key}:`, error);
      }
    }
    return items;
  };
  console.log("Get all items from LS:", getAllItemsFromLocalStorage());

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

  useEffect(() => {
    let filtered = Object.values(notes);

    if (categoryFilter) {
      filtered = filtered.filter(
        (note) => note.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }
    if (searchQuery) {
      filtered = filtered.filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    //if (searchDate) {
    //  filtered = filtered.filter((note) => note.date.startsWith(searchDate));
    //}

    setFilteredNotes(filtered);
  }, [categoryFilter, searchQuery, notes]);

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
  const onEdit = (key) => {
    console.log("Edit:", key);
    if (!key) return;
    navigate(`/edit/${key}`);
  };

  return (
    <div>
      {/* Wrapper to ensure full width */}
      <div className="flex justify-center w-full">
        {/* Centered button container */}
        <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
          {cats.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategoryFilter(cat.label)}
              className="flex items-center bg-white-500 text-white px-4 py-2 rounded-lg hover:bg-white transition"
            >
              {cat.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Notes List */}
      <div
        id="items-list"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
      >
        {Object.values(filteredNotes).map((item) => (
          <NoteCard
            itemKey={item.id}
            title={item.title}
            date={item.date}
            category={item.category}
            description={item.description}
            onEdit={() => onEdit(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
