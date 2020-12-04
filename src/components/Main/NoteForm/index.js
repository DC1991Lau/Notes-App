import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdCheck } from "react-icons/md";
import colors from "../../../styles/colors";
import "./styles.css";

import { createNote } from "../../../actions/notes";

export default function NoteForm({ id, color, text, date }) {
  const dispatch = useDispatch();
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const [noteData, setNoteData] = useState({
    id: id ? id : "",
    text: text ? text : "",
    color: color,
    date: date ? date : today.toLocaleDateString(),
  });

  const clear = () => {
    setNoteData({
      id: "",
      text: "",
      color: color,
      date: today.toLocaleDateString(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote(noteData));
    clear();
  };

  return (
    <form
      className="cardform__container"
      style={{ backgroundColor: color }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="text"
        className="cardform_input"
        placeholder="Note"
        value={noteData.text}
        style={{ backgroundColor: color }}
        onChange={(e) => setNoteData({ ...noteData, text: e.target.value })}
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
