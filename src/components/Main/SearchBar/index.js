import React from "react";
import { MdSearch } from "react-icons/md";
import colors from "../../../styles/colors";
import "./styles.css";

export default function SearchBar() {
  return (
    <div className="search__container">
      <MdSearch size="21px" color={colors.gray} />
      <input type="text" className="search" placeholder="Search" />
    </div>
  );
}
