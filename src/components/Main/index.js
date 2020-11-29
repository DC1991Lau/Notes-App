import React, { useState, useEffect } from "react";
import "./styles.css";

import NotesContainer from "./NotesContainer";
import SearchBar from "./SearchBar";

export default function Main() {
  return (
    <div className="main__container">
      <SearchBar />
      <h1 style={{ marginBottom: "25px" }}>Notes</h1>
      <NotesContainer />
    </div>
  );
}
