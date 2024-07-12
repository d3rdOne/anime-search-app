import { useEffect, useState } from "react";
import Search from "../components/Search";

import { useDispatch, useSelector } from "react-redux";

import AnimeList from "../components/AnimeList";
import { useDebounce } from "../customHooks/useDebounce";
import Paginator from "../components/Paginator";
import { saveTitle, setCurrentPage, setPageCount } from "../slice/animeSlice";
import { useLazyGetAnimeListQuery } from "../slice/animeAPISlice";
import ScrollToTop from "react-scroll-to-top";
import ScrollTop from "../components/ScrollTop";

const Home = () => {
  const DEBOUNCE_TIME_MS = 600;
  const animeTitle = useSelector((state) => state.animeSearch.title);
  const currentPage = useSelector((state) => state.animeSearch.currentPage);
  const [searchTitle, setSearchTitle] = useState(animeTitle);
  const debouncedSearchTitle = useDebounce(searchTitle, DEBOUNCE_TIME_MS);

  const [trigger, { data: animeList, isLoading, isFetching }] =
    useLazyGetAnimeListQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveTitle(debouncedSearchTitle));
    trigger({ title: debouncedSearchTitle, page: 1 }, true);
    dispatch(setCurrentPage(1));
  }, [debouncedSearchTitle, dispatch, trigger]);

  useEffect(() => {
    trigger({ title: animeTitle, page: currentPage }, true);
    dispatch(setCurrentPage(currentPage));
  }, [currentPage, animeTitle, trigger, dispatch]);

  useEffect(() => {
    if (animeList?.pagination) {
      let count = Math.ceil(
        animeList["pagination"]["items"]["total"] /
          animeList["pagination"]["items"]["per_page"]
      );
      dispatch(setPageCount(count));
    }
  }, [animeList, dispatch]);

  const handleSearch = (value) => {
    setSearchTitle(value);
  };

  const handleSelectPage = (value) => {
    dispatch(setCurrentPage(value + 1));
  };
  const handleClearSearch = () => {
    setSearchTitle("");
  };

  return (
    <>
      <Search
        id="search"
        className=""
        onSearch={handleSearch}
        onClear={handleClearSearch}
        title={searchTitle}
      />
      <ScrollToTop smooth className="custom" component={<ScrollTop />} />
      <Paginator
        containerClassName="mt-10 mb-8"
        onSelectPage={handleSelectPage}
      ></Paginator>

      <div className="mt-4  h-full min-h-svh w-full transition-all duration-500  gap-8 sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 auto-rows-auto justify-center">
        <AnimeList
          animeList={animeList}
          isLoading={isLoading}
          isFetching={isFetching}
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
