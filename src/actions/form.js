import { SHOW_FORM } from "../constants/actionTypes";

export const showForm = (color) => {
  return { type: SHOW_FORM, payload: { color: color } };
};
