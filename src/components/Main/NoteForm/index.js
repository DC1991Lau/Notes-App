import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import colors from "../../../styles/colors";
import "./styles.css";

export default function NoteForm({ color }) {
  const [text, setText] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
  };
  return (
    <form
      className="cardform__container"
      style={{ backgroundColor: color }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="cardform_input"
        placeholder="Note"
        style={{ backgroundColor: color }}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="cardform__footer">
        <button
          className="footer_button"
          type="submit"
          style={{ backgroundColor: colors.green }}
        >
          <MdCheck color="#FFF" />
        </button>
      </div>
    </form>
  );
}
