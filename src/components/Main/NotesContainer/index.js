import React from "react";
import NoteForm from "../NoteForm";
import colors from "../../../styles/colors";

export default function NotesContainer() {
  return (
    <div>
      <NoteForm color={colors.orange} />
    </div>
  );
}
