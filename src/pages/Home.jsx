import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Notes from "../components/Notes";

const Home = () => {
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
