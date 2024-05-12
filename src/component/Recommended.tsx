import { Card } from "../component";
import { MovieDataType } from "../modals";
type RecommendedProps = {
  recommendedMovies: MovieDataType[];
};

const Recommended = ({ recommendedMovies }: RecommendedProps) => {
  return (
    <>
      <div className="flex gap-5 mt-10 flex-wrap">
        {recommendedMovies.map((movie) => (
          <Card key={movie.id} detailsOnTop={false} movie={movie}></Card>
        ))}
      </div>
    </>
  );
};

export default Recommended;
