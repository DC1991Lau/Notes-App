import React from "react";
import { MdEdit, MdCheck } from "react-icons/md";
import "./styles.css";

export default function Note({ color, text, date }) {
  return (
    <div className="card__container" style={{ backgroundColor: color }}>
      <div className="card__text">
        <p>{text}</p>
      </div>

      <div className="card__footer">
        <p>{date}</p>
        <div className="footer_edit">
          <MdEdit color="#FFF" />
        </div>
      </div>
    </div>
  );
}
