import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Details from "./pages/Details";
// import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Header from "./components/Header";

function App() {
  // const theme = useSelector((state) => state.animeSearch.theme);
  return (
    <>
      <motion.div
        layout
        className="h-full min-h-lvh px-4 flex flex-col items-center  font-sans bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-50 box-border trans-all-500"
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/anime/:id" element={<Details />}></Route>
            <Route path="/manga/:id" element={<Details />}></Route>
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
