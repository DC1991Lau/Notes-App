import React, { useState } from "react";
import "./styles.css";

import { IoAddCircle } from "react-icons/io5";
import { GiPlainCircle } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { showForm } from "../../actions/form";

export default function Sidebar() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="sidebar__container">
      <h3>Notes App</h3>
      <IoAddCircle
        color="#31291D"
        size="36px"
        style={{ marginBottom: "25px" }}
        onClick={() => setShowCategories((state) => !state)}
      />
      <div className="categories__container">
        {showCategories &&
          categories.map((categorie) => (
            <GiPlainCircle
              onClick={() => {
                dispatch(showForm(categorie.color));
              }}
              key={categorie.id}
              className="categories__selectors"
              style={{ marginBottom: "15px" }}
              color={categorie.color}
            />
          ))}
      </div>
    </div>
  );
}
