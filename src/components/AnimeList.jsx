/* eslint-disable react/prop-types */
// import { memo } from "react";
import AnimeCard, { AnimeCardSkeleton } from "./AnimeCard";

const AnimeList = ({ animeList, isLoading, isFetching }) => {
  return (
    <>
      {(isLoading || isFetching) && (
        <>
          {Array.from({ length: 10 }, (_, i) => (
            <AnimeCardSkeleton key={i} />
          ))}
        </>
      )}
      {animeList?.data?.length == 0 && !isFetching && (
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
