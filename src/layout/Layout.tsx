import { Outlet } from "react-router-dom";
import {
  Card,
  Header,
  Heading,
  LeftSideBar,
  Recommended,
  SearchControl,
  Skelton,
} from "../component";
import useDebounce from "../hooks/useDebounce";
import { useState } from "react";
import { useSearchPosts } from "../services/queries";
import { MovieDataType } from "../modals";
const Layout = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const searchQuery = useSearchPosts(debouncedSearch);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <LeftSideBar></LeftSideBar>
      <Header></Header>
      <div className="flex-grow flex flex-col p-10 overflow-y-scroll custom-scrollbar">
        <SearchControl search={search} setSearch={setSearch}></SearchControl>
        {search ? (
          <>
            {searchQuery.isPending ? (
              <div className="mt-10">
                <Skelton></Skelton>
              </div>
            ) : (
              <>
                {searchQuery.data?.length ? (
                  <Recommended recommendedMovies={searchQuery.data} />
                ) : (
                  <Heading heading="No result found!!" />
                )}
              </>
            )}
          </>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Layout;
