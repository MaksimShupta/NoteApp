import { useState } from "react";
//import { createContext, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="category/:category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
