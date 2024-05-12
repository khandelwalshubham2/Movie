import { Heading, Recommended, Skelton } from "../component";
import { useGetSeriesData } from "../services/queries";

const Series = () => {
  const seriesDataQuery = useGetSeriesData();
  return (
    <>
      <Heading heading="Series"></Heading>
      {seriesDataQuery.isLoading ? (
        <Skelton></Skelton>
      ) : (
        <Recommended recommendedMovies={seriesDataQuery.data}></Recommended>
      )}
    </>
  );
};

export default Series;
