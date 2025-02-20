import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { CategoryContext } from "../App";

const CategoryButton = ({ cat }) => {
  const navigate = useNavigate();

  const { categories } = useContext(CategoryContext);
  console.log("Category button:", categories);
  console.log("cat:", cat);

  const handleClick = () => {
    navigate(`/category/${cat}`); // Navigate to category page
  };
  console.log("icon", categories[cat]);
  return (
    <button
      onClick={handleClick}
      className="bg-white-500 text-white px-4 py-2 rounded-lg hover:bg-white transition"
    >
      <img
        src={categories[cat.toLowerCase()]}
        // alt={cat.toUpperCase()}
        className="w-6 h-6"
      />
    </button>
  );
};

export default CategoryButton;
