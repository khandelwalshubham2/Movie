import { Link } from "react-router-dom";
import { NAVLINKS } from "../data/link";

const LeftSideBar = () => {
  const navLinks = NAVLINKS;
  return (
    <div className="bg-secondaryColor w-52 shrink-0 hidden md:block">
      <p className="text-xl my-10 px-5">Movie App</p>
      {navLinks.map((link) => (
        <div key={link.name} className="p-5">
          <Link to={link.link} className="inline-block">
            <span className="flex items-center gap-2 cursor-pointer">
              <span>{link.icon}</span> <span>{link.name}</span>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LeftSideBar;
