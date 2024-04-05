import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setQuery } from "../redux/features/querySlice";

import AppInput from "./Input";

const SearchBar = () => {
  const query = useAppSelector((state) => state.query);
  const dispatch = useAppDispatch();

  const handleSearch = (e) => {
    const newQuery = e.target.value;
    dispatch(setQuery(newQuery));
  };

  return (
    <>
      <AppInput
        border="none"
        type="search"
        height="2.5rem"
        value={query}
        onChange={handleSearch}
        placeholder={"search"}
      />
    </>
  );
};

export default SearchBar;
