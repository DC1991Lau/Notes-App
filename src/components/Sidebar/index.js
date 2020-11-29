import React from "react";
import colors from "../../styles/colors";
import "./styles.css";

import { IoAddCircle } from "react-icons/io5";
import { GiPlainCircle } from "react-icons/gi";

export default function Sidebar() {
  return (
    <div className="sidebar__container">
      <h3>Notes App</h3>
      <IoAddCircle
        color="#31291D"
        size="36px"
        style={{ marginBottom: "25px" }}
      />
      <GiPlainCircle style={{ marginBottom: "15px" }} color={colors.purple} />
      <GiPlainCircle style={{ marginBottom: "15px" }} color={colors.red} />
      <GiPlainCircle style={{ marginBottom: "15px" }} color={colors.green} />
      <GiPlainCircle style={{ marginBottom: "15px" }} color={colors.orange} />
    </div>
  );
}
