import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AnimeCard = ({ anime }) => {
  const genreList = anime["genres"];

  return (
    <Link
      to={`/anime/${anime["mal_id"]}`}
      preventScrollReset={false}
      className="w-full hover:scale-105 scroll-smooth transition-all text-black dark:text-white cursor-pointer"
    >
      <div className="flex flex-col">
        <div className="relative w-full h-80 ">
          <img
            src={anime["images"]["jpg"]["large_image_url"]}
            alt={anime["title"]}
            loading="lazy"
            className="w-full h-80 object-cover rounded-lg shadow-lg absolute border-1px border-blue-50 dark:shadow-lg"
          />
          <p className="absolute top-1 left-1 bg-red-500 px-3 rounded-sm rounded-tl-lg rounded-br-lg text-white text-md">
            {anime["type"]}
          </p>
        </div>

        {/* <div className={`w-full p-4 bg-gray-900/95 z-20 text-md text-white text-center font-default rounded-b-lg truncate tracking-wide ${hover && 'overflow-auto whitespace-normal'}`}>
          {anime['title']}
        </div> */}
        <div className="mt-2 w-full flex flex-wrap gap-1">
          {genreList.length > 0 &&
            genreList.map((genre) => (
              <div
                key={genre["mal_id"]}
                className="genre text-xs px-2 h-4 font-default bg-gray-500 rounded-lg text-white"
              >
                {genre["name"]}
              </div>
            ))}
        </div>

        <div className="text-xl mt-2">{anime["title"]}</div>
      </div>
    </Link>
  );
};

export default AnimeCard;
