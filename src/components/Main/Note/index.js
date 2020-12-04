import React, { useState } from "react";
import { MdEdit, MdDelete, MdCheck } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../../../actions/notes";
import "./styles.css";

export default function Note({ id, color, text, date }) {
  const [edit, setEdit] = useState(false);
  const [noteData, setNoteData] = useState({ id, text, color, date });
  const dispatch = useDispatch();
  return (
    <div className="card__container" style={{ backgroundColor: color }}>
      {edit ? (
        <input
          type="text"
          name="text"
          className="cardform_input"
          placeholder="Note"
          value={noteData.text}
          style={{ backgroundColor: color }}
          onChange={(e) => setNoteData({ ...noteData, text: e.target.value })}
        />
      ) : (
        <div className="card__text">
          <p>{text}</p>
        </div>
      )}

      <div className="card__footer">
        <p>{date}</p>
        <div className="footer__buttons">
          <div className="footer_edit">
            {edit ? (
              <MdCheck
                color="#FFF"
                onClick={() => {
                  dispatch(updateNote(id, noteData));
                  setEdit(false);
                }}
              />
            ) : (
              <MdEdit color="#FFF" onClick={() => setEdit(true)} />
            )}
          </div>
          <div className="footer_edit" onClick={() => dispatch(deleteNote(id))}>
            <MdDelete color="#FFF" />
          </div>
        </div>
      </div>
    </div>
  );
}
