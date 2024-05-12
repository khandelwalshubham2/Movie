import { CiSearch } from "react-icons/ci";

type SearchControlProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchControl = ({ search, setSearch }: SearchControlProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search for Movies or TV Series"
        className="w-full bg-transparent border-b-2 border-b-secondaryColor outline-none text-white pl-5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CiSearch className="text-white absolute top-1 left-0" />
    </div>
  );
};

export default SearchControl;
