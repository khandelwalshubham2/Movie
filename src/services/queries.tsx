import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ENDPATH, ENDURL } from "../data";
import { getData, putData } from "./api";
import { MovieDataType } from "../modals";

export const useGetMovieData = () => {
  //const query =
  return useQuery({
    queryKey: ["movies"],
    queryFn: () => getData(ENDURL + ENDPATH.movies),
  });
};

export const useGetTrendingMoviesData = () => {
  //const query =
  return useQuery({
    queryKey: ["movies, trendingMovies"],
    queryFn: () => getData(ENDURL + ENDPATH.trending),
  });
};

export const useGetRecommendedMoviesData = () => {
  //const query =
  return useQuery({
    queryKey: ["movies, recommendedMovies"],
    queryFn: () => getData(ENDURL + ENDPATH.recommended),
  });
};

export const useGetSeriesData = () => {
  //const query =
  return useQuery({
    queryKey: ["movies, series"],
    queryFn: () => getData(ENDURL + ENDPATH.series),
  });
};

export const useGetBookmarkData = () => {
  //const query =
  return useQuery({
    queryKey: ["movies, series, bookmark"],
    queryFn: () => getData(ENDURL + ENDPATH.bookmark),
  });
};

export const useUpdateBookmark = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (variable: MovieDataType) =>
      putData(ENDURL + "/" + variable.id, variable),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["movies"],
      }),
  });
};

export const useSearchPosts = (searchTerm: string) => {
  return useQuery({
    queryKey: ["getSearchPosts", searchTerm],
    enabled: !!searchTerm,
    queryFn: () => getData(ENDURL + ENDPATH.search + searchTerm),
  });
};
