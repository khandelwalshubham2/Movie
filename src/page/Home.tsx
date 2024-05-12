import { Heading, Recommended, Skelton, Trending } from "../component";
import {
  useGetRecommendedMoviesData,
  useGetTrendingMoviesData,
} from "../services/queries";

// trendingMoviesQuery.isLoading;
// recommendedMoviesQuery.isLoading;
const Home = () => {
  const trendingMoviesQuery = useGetTrendingMoviesData();
  const recommendedMoviesQuery = useGetRecommendedMoviesData();
  return (
    <>
      <Heading heading="Trending"></Heading>
      {trendingMoviesQuery.isLoading ? (
        <Skelton></Skelton>
      ) : (
        <Trending trendingMovies={trendingMoviesQuery.data}></Trending>
      )}
      <Heading heading="Recommended for you"></Heading>
      {recommendedMoviesQuery.isLoading ? (
        <Skelton></Skelton>
      ) : (
        <Recommended
          recommendedMovies={recommendedMoviesQuery.data}
        ></Recommended>
      )}
    </>
  );
};

export default Home;
