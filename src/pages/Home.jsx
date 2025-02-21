import Navbar from "../components/Navbar";
import Notes from "../components/Notes";
import { useState } from "react";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  //const [searchDate, setSearchDate] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
    //setSearchDate(date);
    console.log("Searching for:", query); // Debugging
  };

  return (
    <div className="flex flex-col bg-gray-900 text-white min-h-screen">
      <Navbar onSearch={handleSearch} />
      <main className="flex-grow container mx-auto p-4">
        <Notes searchQuery={searchQuery} />
      </main>
    </div>
  );
};

export default Home;
