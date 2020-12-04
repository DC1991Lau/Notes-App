import axios from "axios";

const url_notes = "http://localhost:3333/notes";
const url_categories = "http://localhost:3333/categories";

export const fetchNotes = () => axios.get(url_notes);
export const createNote = (newNote) => axios.post(url_notes, newNote);
export const likeNote = (id) => axios.patch(`${url_notes}/${id}/likeNote`);
export const updateNote = (id, updatedNote) =>
  axios.patch(`${url_notes}/${id}`, updatedNote);
export const deleteNote = (id) => axios.delete(`${url_notes}/${id}`);
export const searchNote = (text) => {
  const result = axios.get(`${url_notes}?q=${text}`);
  console.log(result);

  return result;
};

export const fetchCategories = () => axios.get(url_categories);
