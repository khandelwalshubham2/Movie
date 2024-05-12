import { Heading, Recommended, Skelton } from "../component";
import { useGetMovieData } from "../services/queries";

const Movies = () => {
  const MovieDataQuery = useGetMovieData();
  return (
    <>
      <Heading heading="Movies"></Heading>
      {MovieDataQuery.isLoading ? (
        <Skelton></Skelton>
      ) : (
        <Recommended recommendedMovies={MovieDataQuery.data}></Recommended>
      )}
    </>
  );
};

export default Movies;
