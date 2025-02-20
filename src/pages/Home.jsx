import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Notes from "../components/Notes";
//import { CategoryContext } from "../App";
//import { useContext } from "react";

const Home = () => {
  //const { categories } = useContext(CategoryContext);
  //localStorage.clear();
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Header />
      <main className="container mx-auto p-4">
        <Notes />
      </main>
    </div>
  );
};

export default Home;
