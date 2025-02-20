import Navbar from "../components/Navbar";
import Notes from "../components/Notes";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <Notes />
      </main>
    </div>
  );
};

export default Home;
