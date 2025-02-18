import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Notes from "../components/Notes";

const Category = () => {
  const { category } = useParams(); // Get category name from URL
  const [items, setItems] = useState([]);
  //TODO; Add Category === Button
  const filteredResult = items.map((e) => e.Category);
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Header />
      <div
        id="items-list"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
      >
        {filteredResult.map((item) => (
          <NoteCard key={item.id} item={item} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Category;
