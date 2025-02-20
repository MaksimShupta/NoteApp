import { createContext, useContext, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Category from "./pages/Category";
import AddNote from "./pages/AddNote";

import htmlIcon from "./images/htmlIcon.svg";
import reactIcon from "./images/reactIcon.svg";
import javascriptIcon from "./images/javascriptIcon.svg";
import sqlIcon from "./images/sqlIcon.svg";

const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
  //const categories = ["HTML", "JavaScript", "React", "SQL"];
  const categories = {
    html: htmlIcon,
    react: reactIcon,
    javascript: javascriptIcon,
    sql: sqlIcon,
  };
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
