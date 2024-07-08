import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AnimeDetails from "./pages/AnimeDetails";
import ThemeButton from "./components/ThemeButton";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Header from "./components/Header";

function App() {
  const theme = useSelector((state) => state.animeSearch.theme);
  return (
    <>
      <motion.div
        layout
        className="h-full min-h-lvh px-4 flex flex-col items-center  font-sans bg-gray-100 text-gray-950 dark:bg-indigo-950 dark:text-gray-50 box-border"
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/anime/:id" element={<AnimeDetails />}></Route>
          </Routes>
        </BrowserRouter>

        <footer className="w-full mt-4 h-16 flex justify-center items-center">
          {" "}
          @ 2024 Reymark Bacalso, All rights reserved.
        </footer>
      </motion.div>
    </>
  );
}

export default App;
