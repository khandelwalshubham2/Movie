import { Heading, Recommended, Skelton } from "../component";
import { useGetBookmarkData } from "../services/queries";

const Bookmarks = () => {
  const bookmarkDataQuery = useGetBookmarkData();
  return (
    <>
      <Heading heading="Bookmarks"></Heading>
      {bookmarkDataQuery.isLoading ? (
        <Skelton></Skelton>
      ) : (
        <Recommended recommendedMovies={bookmarkDataQuery.data}></Recommended>
      )}
    </>
  );
};

export default Bookmarks;
