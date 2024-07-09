/* eslint-disable react/prop-types */
import { memo } from "react";
import AnimeCard from "./AnimeCard";

const AnimeList = ({ animeList, isLoading, isFetching }) => {
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

export default memo(AnimeList);
