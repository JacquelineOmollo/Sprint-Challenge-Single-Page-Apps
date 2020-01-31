import React, { useState } from "react";

function SearchForm({ onSearch, props }) {
  const [searchName, setSearch] = useState("");

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  const resetInputField = () => {
    searchName("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchName);
    resetInputField();
  };
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch("name")}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={searchName}
          name="name"
        />
        {/* <button type="submit">Search</button> */}
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    </section>
  );
}

export default SearchForm;
