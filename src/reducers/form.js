import { showForm } from "../actions/form";
import { SHOW_FORM } from "../constants/actionTypes";

export default (formState = { showForm: false }, action) => {
  switch (action.type) {
    case SHOW_FORM:
      const color = action.payload.color;
      console.log(color);
      const newShowForm = !formState.showForm;
      return { ...formState, showForm: newShowForm, color: color };
    default:
      return showForm;
  }
};
