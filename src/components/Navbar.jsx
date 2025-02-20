import { useState } from "react";
import { Link, useNavigate } from "react-router";
import addIcon from "../images/addIcon.svg";

const Navbar = () => {
  //TODO: add logic
  const navigate = useNavigate();
  const handleAddNote = (e) => {
    e.preventDefault();
    navigate("/add-note");
  };
  return (
    <>
      <nav className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link
            to="/"
            onClick={() => setCategoryFilter("")}
            className="text-lg font-bold"
          >
            Home
          </Link>
          <form className="hidden md:flex flex-grow justify-center mx-8">
            <div className="relative w-full max-w-md flex">
              <input
                id="search-bar"
                type="search"
                placeholder="Search items..."
                className="w-full px-4 py-2 pl-10 rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-r-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Search
              </button>
            </div>
          </form>
          <button
            type="button"
            className="w-12 h-12 bg-yellow-500  text-gray-800 font-semibold rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center justify-center"
            onClick={handleAddNote}
          >
            <img src={addIcon} alt="New Note" className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
