import { useState } from "react";
import Search from "../components/Search";

import { useSelector } from "react-redux";

import AnimeList from "../components/AnimeList";
import { useDebounce } from "../customHooks/useDebounce";

const Home = () => {
  const DEBOUNCE_TIME_MS = 600;
  const animeTitle = useSelector((state) => state.animeSearch.title);
  const [searchTitle, setSearchTitle] = useState(animeTitle);
  const debouncedSearchTitle = useDebounce(searchTitle, DEBOUNCE_TIME_MS);

  const handleSearch = (value) => {
    setSearchTitle(value);
  };

  return (
    <>
      <Search
        id="search"
        className=""
        onSearch={handleSearch}
        title={searchTitle}
      />
      <div className="mt-20  h-full min-h-svh w-full  gap-8 sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 auto-rows-auto justify-center">
        <AnimeList animeTitle={debouncedSearchTitle}></AnimeList>
      </div>
    </>
  );
};

export default Home;
