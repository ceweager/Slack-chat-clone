import GET_MESSAGES, { CREATE_MESSAGE } from "../action_constants";

export default function (state = [], action) {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload.length >= 1 ? action.payload : state;
    // case CREATE_MESSAGE:
    default:
      return state;
  }
}
