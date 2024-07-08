import { useState } from "react";
import Search from "../components/Search";

import { useSelector } from "react-redux";

import AnimeList from "../components/AnimeList";
import { useDebounce } from "../customHooks/useDebounce";
import Paginator from "../components/Paginator";

const Home = () => {
  const DEBOUNCE_TIME_MS = 600;
  const animeTitle = useSelector((state) => state.animeSearch.title);
  const currentPage = useSelector((state) => state.animeSearch.currentPage);
  const [searchTitle, setSearchTitle] = useState(animeTitle);
  const debouncedSearchTitle = useDebounce(searchTitle, DEBOUNCE_TIME_MS);
  const [page, setPage] = useState(currentPage);

  const handleSearch = (value) => {
    setSearchTitle(value);
  };

  const handleSelectPage = (value) => {
    setPage(value + 1);
  };

  return (
    <>
      <Search
        id="search"
        className=""
        onSearch={handleSearch}
        title={searchTitle}
      />
      <Paginator
        containerClassName="mt-10 mb-8"
        onSelectPage={handleSelectPage}
      ></Paginator>

      <div className="mt-4  h-full min-h-svh w-full  gap-8 sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 auto-rows-auto justify-center">
        <AnimeList
          animeTitle={debouncedSearchTitle}
          currentPage={page}
        ></AnimeList>
      </div>

      <Paginator
        containerClassName={"m-8"}
        onSelectPage={handleSelectPage}
      ></Paginator>
    </>
  );
};

export default Home;
