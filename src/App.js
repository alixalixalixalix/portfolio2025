import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scroll from "./components/Scroll";
import HomeAlix from "./pages/HomeAlix";
import Projet from "./pages/Projet";
import "./App.scss";
import HomeXila from "./pages/HomeXila";
import XilaPoppinProjet from "./components/xila/XilaPopinProjet";

const App = () => {
  return (
    <BrowserRouter>
      <Scroll />
      <Routes>
        <Route path="/" element={<HomeAlix />} />
        <Route path="/xila" element={<HomeXila />} />
        <Route path="/xila/projet/:id" element={<XilaPoppinProjet />} />
        <Route path="/projet/:id" element={<Projet />} />
        <Route path="/*" element={<HomeAlix />} />
        <Route path="/xila/*" element={<HomeXila />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
