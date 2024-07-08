/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AnimeCard from "./AnimeCard";
import { useLazyGetAnimeListQuery } from "../slice/animeAPISlice";
import { saveTitle, setCurrentPage, setPageCount } from "../slice/animeSlice";
import { useDispatch } from "react-redux";

const AnimeList = ({ animeTitle, currentPage }) => {
  const [trigger, { data: animeList, isLoading, isFetching }] =
    useLazyGetAnimeListQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (animeList?.pagination) {
      let count = Math.ceil(
        animeList["pagination"]["items"]["total"] /
          animeList["pagination"]["items"]["per_page"]
      );
      dispatch(setPageCount(count));
    }
  }, [animeList, dispatch]);

  useEffect(() => {
    trigger({ title: animeTitle, page: 1 }, true);
    dispatch(saveTitle(animeTitle));
  }, [animeTitle, dispatch, trigger]);

  useEffect(() => {
    trigger({ title: animeTitle, page: currentPage }, true);
    dispatch(setCurrentPage(currentPage));
  }, [currentPage, animeTitle, trigger, dispatch]);

  return (
    <>
      {(isLoading || isFetching) && (
        <>
          {" "}
          <div className="text-3xl text-gray-950 dark:text-gray-50 col-span-full text-center">
            <div className="mt-20 animate-bounce">Loading...</div>
          </div>
        </>
      )}
      {animeList?.length == 0 && !isFetching && (
        <>
          <div className="text-3xl col-span-full flex justify-center text-gray-950 dark:text-gray-50">
            {" "}
            NO RESULTS
          </div>
        </>
      )}

      {animeList?.data?.length > 0 &&
        !isLoading &&
        !isFetching &&
        animeList?.data.map((anime, index) => (
          <AnimeCard anime={anime} key={`${anime["mal_id"]}-${index}`} />
        ))}
    </>
  );
};

export default AnimeList;
