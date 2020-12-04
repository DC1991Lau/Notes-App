import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  SEARCH,
} from "../constants/actionTypes";

export default (notes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    case CREATE:
      return [...notes, action.payload];
    case UPDATE:
      return notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    case DELETE:
      return notes.filter((note) => note.id !== action.payload);
    case SEARCH:
      return action.payload;
    default:
      return notes;
  }
};
