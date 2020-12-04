import React from "react";
import { useSelector } from "react-redux";
import NoteForm from "../NoteForm";
import colors from "../../../styles/colors";
import Note from "../Note";
import "./styles.css";
export default function NotesContainer() {
  const notes = useSelector((state) => state.notes);
  const formData = useSelector((state) => state.form);

  return (
    <div className="notes__container">
      {formData.showForm && <NoteForm color={formData.color} />}
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          color={note.color}
          text={note.text}
          date={note.date}
        />
      ))}
    </div>
  );
}
