import { LOAD_AUTHORS_SUCCESS } from "../constants/actionTypes";

export default function authorReducer(state = [], action) {
  switch (action.type) {
    case LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
