import { useState } from "react";

import { primaryColors } from "../assets/Colors";
import AppInput from "./Input";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <AppInput
        border="none"
        backgroundColor={primaryColors.Gray}
        width="25rem"
        height="2.5rem"
        value={searchQuery}
        onChange={handleSearch}
        placeholder={"search"}
      />
    </>
  );
};

export default SearchBar;
