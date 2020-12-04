import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { searchNote } from "../../../actions/notes";
import colors from "../../../styles/colors";
import SearchTag from "../SearchTag";
import "./styles.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [showTag, setShowTag] = useState(false);
  const [tagText, setTagText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchText);
    dispatch(searchNote(searchText));
    setTagText(searchText);
    setShowTag(true);
    setSearchText("");
  }

  return (
    <form className="search__container" onSubmit={handleSubmit}>
      <MdSearch size="21px" color={colors.gray} />
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        className="search"
        placeholder="Search"
      />
      {showTag && <SearchTag searchText={tagText} setShowTag={setShowTag} />}
    </form>
  );
}
