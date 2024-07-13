import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import RelatedEntries from "../components/RelatedEntries";
import Accordion from "../components/Accordion";
import { useGetAnimeDetailQuery } from "../slice/animeAPISlice";
import { isNull } from "lodash";
import AnimeImages from "../components/AnimeImages";
import ScrollToTop from "react-scroll-to-top";
import ScrollTop from "../components/ScrollTop";
import Skeleton from "react-loading-skeleton";

const Details = () => {
  const STAR_RATING_COUNT = 5;
  const anime = useParams();

  const { data, isLoading } = useGetAnimeDetailQuery(anime.id);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (data?.data) {
      setDetails(data.data);
    }
  }, [data]);

  const getStarRating = (score) => {
    let stars = [];
    for (let i = 0; i < STAR_RATING_COUNT; i++) {
      stars.push(
        i + 1 <= Math.floor(score / 2)
          ? " text-pink-600 dark:text-yellow-300"
          : " text-gray-500 dark:text-gray-300"
      );
    }
    return stars.map((star, index) => {
      return <StarRating key={index} className={star} />;
    });
  };
  return (
    <div className="w-full  h-full  sm:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl relative">
      <ScrollToTop smooth className="custom" component={<ScrollTop />} />
      <div className="h-full sm:max-w-screen-xl mx-auto   text-black dark:text-gray-100 relative">
        <div className=" text-black dark:text-gray-50 tracking-wide text-2xl">
          {/* <Link to="/" className="font-semibold">
            {" "}
            HOME
          </Link> */}
        </div>
        <div className="mt-4 p-4 min-h-svh">
          {isLoading && false && (
            <>
              <div className="text-3xl animate-bounce flex justify-center items-center">
                Loading Details...
              </div>
            </>
          )}

          <div className="text-2xl w-full">
            {/* Details */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 ">
              <div className="left flex flex-col items-center md:place-self-start">
                <div className="h-full  w-80 px-4 sm:px-0">
                  {isNull(details) ? (
                    <Skeleton className="w-full min-h-[28rem]" />
                  ) : (
                    <img
                      src={details?.["images"]["jpg"]["large_image_url"]}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  )}

                  <div className=" flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                    {isNull(details)
                      ? Array.from({ length: 5 }, (_, i) => (
                          <Skeleton key={i} className="h-4 w-14 rounded-lg" />
                        ))
                      : details?.["genres"].map((genre) => (
                          <div
                            key={genre["mal_id"]}
                            className="genre text-xs px-2  font-default border-2 dark:border-gray-500 dark:bg-gray-500 text-black dark:text-gray-50 rounded-lg"
                          >
                            {genre["name"]}
                          </div>
                        ))}
                  </div>
                </div>
              </div>
              <div className="right min-h-svh max-h-full w-full flex-col mt-4 md:mt-0 text-center md:text-left px-0 md:px-4">
                <h3 className="text-3xl tracking-wide">
                  {isNull(details) ? (
                    <div className="flex gap-2">
                      <Skeleton className="w-96 h-8 rounded-lg" />
                      <Skeleton className="w-16 h-8 rounded-lg" />
                    </div>
                  ) : (
                    <>
                      {details["title"]}
                      <span className="text-lg bg-yellow-500 dark:bg-yellow-300 text-black px-3 ml-2 rounded-xl">
                        {details?.["type"]}
                      </span>
                    </>
                  )}
                </h3>
                <div className="flex justify-center md:justify-start gap-1 my-2">
                  {isNull(details) ? (
                    <Skeleton className="w-96 rounded-lg" />
                  ) : (
                    getStarRating(details?.["score"])
                  )}
                </div>
                {isNull(details) ? (
                  <div className="w-full">
                    <Skeleton className="w-36 rounded-lg" />
                    {Array.from({ length: 15 }, (_, i) => (
                      <Skeleton key={i} className="w-full mt-2 rounded-lg" />
                    ))}
                  </div>
                ) : (
                  <>
                    {/* Synopsis */}
                    <Accordion
                      title="Synopsis"
                      className={
                        " text-lg tracking-wider w-full py-1 text-black dark:text-gray-50 mt-4"
                      }
                    >
                      <p className="text-sm sm:text-sm tracking-wide overflow-auto text-left text-black dark:text-gray-100 mt-2 whitespace-pre-line">
                        {" "}
                        {details?.["synopsis"] || "Not Available"}
                      </p>
                    </Accordion>

                    {/* Background */}
                    <Accordion
                      title="Background"
                      className={
                        " text-lg tracking-wider w-full py-1 text-black dark:text-gray-50 mt-4"
                      }
                    >
                      <p className="text-sm sm:text-sm tracking-wide min-h-4 overflow-auto text-left text-black dark:text-gray-100 mt-2 whitespace-pre-line">
                        {" "}
                        {details?.["background"] || "Not Available"}
                      </p>
                    </Accordion>

                    {/* Images */}
                    <Accordion
                      title="Images"
                      className={
                        " text-lg tracking-wider w-full py-1 text-black dark:text-gray-50 mt-4"
                      }
                    >
                      <AnimeImages id={anime.id}></AnimeImages>
                    </Accordion>

                    {/* Related Entries */}
                    <Accordion
                      title="Related Entries"
                      className={
                        " text-lg tracking-wider w-full py-1 text-black dark:text-gray-50 mt-4"
                      }
                    >
                      <RelatedEntries animeId={anime.id} />
                    </Accordion>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
