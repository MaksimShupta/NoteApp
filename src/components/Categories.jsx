import { useState, useEffect } from "react";
import CategoryButton from "../components/CategoryButton";

const Categories = () => {
  //const [items, setItems] = useState([]);
  //localStorage.getItem();
  const categories = ["HTML", "JavaScript", "React", "SQL"];
  return (
    <div
      id="cat-list"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4"
    >
      {categories.map((item, index) => (
        <CategoryButton key={index} cat={item} />
      ))}
    </div>
  );
};

export default Categories;
