import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLocalMovies } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { PiBookmarkSimple } from "react-icons/pi";
export const NAVLINKS = [
  {
    name: "Home",
    icon: <IoHomeOutline />,
    link: "/",
  },
  {
    name: "Movies",
    icon: <MdOutlineLocalMovies />,
    link: "/movies",
  },
  {
    name: "TV Series",
    icon: <PiTelevision />,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: <PiBookmarkSimple />,
    link: "/bookmarks",
  },
];
