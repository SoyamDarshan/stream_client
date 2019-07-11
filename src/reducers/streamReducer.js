import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAMS,
  EDIT_STREAMS,
  DELETE_STREAMS
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
