/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useGetAnimePicturesQuery } from "../slice/animeAPISlice";
const AnimeImages = ({ id }) => {
  const [images, setImages] = useState([]);
  const { data } = useGetAnimePicturesQuery(id);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (data?.data) {
      setImages(
        data.data.map((data) => {
          return {
            src: data["jpg"]["large_image_url"],
          };
        })
      );
    }
  }, [data]);

  return (
    <>
      <div className="grid grid-cols-1 auto-rows-auto sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
        {images.length > 0 &&
          images.map((image, index) => (
            <div className="h-56 w-full" key={index}>
              <img
                src={image.src}
                alt=""
                onClick={() => setOpen(!open)}
                className="object-cover h-full w-full"
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default AnimeImages;
