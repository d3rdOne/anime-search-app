/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import { useGetAnimeListQuery } from "../slice/animeAPISlice";
import { saveTitle } from "../slice/animeSlice";
import { useDispatch } from "react-redux";

const AnimeList = ({ animeTitle }) => {
  const { data, isLoading, isFetching } = useGetAnimeListQuery(animeTitle);
  const [animeList, storeAnimeList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.data) {
      storeAnimeList(data.data);
    }
    dispatch(saveTitle(animeTitle));
  }, [animeTitle, data, dispatch]);
  return (
    <>
      {(isLoading || isFetching) && (
        <>
          {" "}
          <div className="text-3xl text-gray-950 dark:text-gray-50 col-span-full text-center">
            <div className="animate-bounce">Loading...</div>
          </div>
        </>
      )}
      {animeList.length == 0 && !isFetching && (
        <>
          <div className="text-3xl col-span-full flex justify-center text-gray-950 dark:text-gray-50">
            {" "}
            NO RESULTS
          </div>
        </>
      )}

      {animeList.length > 0 &&
        !isLoading &&
        !isFetching &&
        animeList.map((anime, index) => (
          <AnimeCard anime={anime} key={`${anime["mal_id"]}-${index}`} />
        ))}
    </>
  );
};

export default AnimeList;
