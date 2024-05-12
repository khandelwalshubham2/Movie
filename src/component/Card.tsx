//import { moviesData } from "../data";
import { PiTelevision } from "react-icons/pi";
import { PiBookmarkSimple } from "react-icons/pi";
import { MovieDataType } from "../modals";
import { useUpdateBookmark } from "../services/queries";
import { IoIosBookmark } from "react-icons/io";
import { Loader } from "./index";
import { useEffect, useState } from "react";
type CardProps = {
  movie: MovieDataType;
  detailsOnTop: boolean;
};
const Card = ({ detailsOnTop, movie }: CardProps) => {
  const updateMutation = useUpdateBookmark();
  //const isBookmarked = movie.isBookmarked;
  const [isBookmarked, setIsBookmarked] = useState<boolean>(movie.isBookmarked);
  const updateBookmark = async () => {
    const data: MovieDataType = { ...movie, isBookmarked: !isBookmarked };
    const result = await updateMutation.mutateAsync(data);
    if (result && result.id) {
      setIsBookmarked(result.isBookmarked);
    }
  };

  useEffect(() => {
    setIsBookmarked(movie.isBookmarked);
  }, [movie.isBookmarked]);

  return (
    <div className="relative rounded-lg overflow-hidden card flex-shrink-0 cursor-pointer">
      <div className="card-image">
        <img src={movie.thumbnail.regular.small} alt={movie.title} />
      </div>
      {detailsOnTop && (
        <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.4)]">
          <div className="text-sm font-semibold absolute top-1/2 left-[10%]">
            <div className="flex gap-3 items-center">
              <span>{movie.year}</span>
              <span className="flex items-center gap-1">
                <PiTelevision /> <span>{movie.category}</span>
              </span>
              <span>{movie.rating}</span>
            </div>
            <div>{movie.title}</div>
          </div>
        </div>
      )}
      <div
        className="absolute right-2 top-2 w-8 h-8 rounded-full bg-transparent flex justify-center items-center bg-black"
        onClick={updateBookmark}
      >
        {updateMutation.isPending ? (
          <Loader></Loader>
        ) : (
          <>
            {isBookmarked ? (
              <IoIosBookmark className="cursor-pointer"></IoIosBookmark>
            ) : (
              <PiBookmarkSimple className="cursor-pointer" />
            )}
          </>
        )}
      </div>
      {!detailsOnTop && (
        <div className="movie-details pt-2">
          <div className="flex gap-3 items-center">
            <span>{movie.year}</span>
            <span className="flex items-center gap-1">
              <PiTelevision /> <span>{movie.category}</span>
            </span>
            <span>{movie.rating}</span>
          </div>
          <div>{movie.title}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
