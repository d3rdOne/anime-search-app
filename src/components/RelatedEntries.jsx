import { useEffect, useState } from "react";
import { useGetAnimeDetailRelationsQuery } from "../slice/animeAPISlice";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RelatedEntries = ({ animeId }) => {
  const { data } = useGetAnimeDetailRelationsQuery(animeId);
  const [relations, setRelations] = useState([]);

  useEffect(() => {
    if (data?.data) {
      setRelations(data.data);
    }
  }, [data]);
  return (
    <>
      {relations.length > 0 &&
        relations.map((relation, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-1 md:gap-3  border-gray-300 mt-3"
          >
            <div className="text-sm text-left md:text-right col-span-12 md:col-span-3 font-medium">
              {relation.relation}
            </div>
            <div className="col-span-12 md:col-span-9">
              {relation.entry.length > 0 &&
                relation.entry.map((entry) => (
                  <div
                    key={entry["mal_id"]}
                    className="text-sm font-medium text-left"
                  >
                    {entry["type"] === "anime" ? (
                      <Link
                        to={`/anime/${entry["mal_id"]}`}
                        className="text-blue-600 dark:text-yellow-300 underline"
                      >
                        {" "}
                        {entry["name"]}
                      </Link>
                    ) : (
                      <a
                        href={entry["url"]}
                        target="_blank"
                        className="text-blue-600 dark:text-yellow-300 underline"
                      >
                        {entry["name"]}
                      </a>
                    )}

                    <span className="capitalize ml-2 font-light">
                      ({entry["type"]})
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default RelatedEntries;
