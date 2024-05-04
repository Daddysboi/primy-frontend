import { setQuery } from "../redux/features/querySlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { Input } from "../components/third-party/input";

const SearchBar = () => {
  const { query } = useAppSelector((state) => state.query);
  const dispatch = useAppDispatch();

  const handleSearch = (e) => {
    const newQuery = e.target.value;
    dispatch(setQuery(newQuery));
  };

  return (
    <div style={{ width: "100%" }}>
      <Input
        className="shadow-none  focus-visible:ring-neutral-100 mb-0"
        id="email"
        placeholder="   Search"
        type="email"
        onChange={handleSearch}
        value={query}
      />
    </div>
  );
};

export default SearchBar;

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </>
  );
};

export const Search = () => {
  return (
    <>
      <AppInput
        border="none"
        type="search"
        height="2.5rem"
        value={query}
        onChange={handleSearch}
        placeholder={"Search"}
        width="150%"
      />
    </>
  );
};
