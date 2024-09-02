import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./Page/HomePage.jsx";
import DetailsPage from "./Page/DetailsPage.jsx";
import AllGames from "./Page/AllGames.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:id" element={<DetailsPage />} />
        <Route path="/*" element={<h1>Page no found</h1>} />
        <Route path="/allgames" element={<AllGames />} />
      </Routes>
    </div>
  );
}
