import React from "react";
import "./styles.css";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { getNotes } from "../../../actions/notes";

// import { Container } from './styles';

function SearchTag({ searchText, setShowTag }) {
  const dispatch = useDispatch();

  return (
    <div className="tag__container">
      <p>{searchText}</p>
      <MdClose
        onClick={() => {
          setShowTag(false);
          dispatch(getNotes());
        }}
      />
    </div>
  );
}

export default SearchTag;
