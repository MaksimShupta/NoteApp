import { createContext, useContext, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Category from "./pages/Category";
import AddNote from "./pages/AddNote";

const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  const categories = ["HTML", "JavaScript", "React", "SQL"];
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

function App() {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="category/:category" element={<Category />} />
          <Route path="add-note" element={<AddNote />} />
        </Routes>
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
export { CategoryContext };
