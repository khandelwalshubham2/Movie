import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Layout from "./layout/Layout";
import { Bookmarks, Home, Movies, Series } from "./page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tv-series" element={<Series />} />
        <Route path="bookmarks" element={<Bookmarks />} />
      </Route>
    </Route>
  )
);

export default router;
