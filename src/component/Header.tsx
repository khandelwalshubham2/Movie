import { Link } from "react-router-dom";
import { NAVLINKS } from "../data/link";

const Header = () => {
  const navLinks = NAVLINKS;
  return (
    <div className="bg-secondaryColor w-full sticky top-0 md:hidden h-16 flex px-5 items-center shrink-0">
      <p className="text-lg">MovieApp</p>
      <ul className="flex gap-4 items-center ml-auto">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.link}>
            {link.icon}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;
