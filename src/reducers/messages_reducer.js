import GET_MESSAGES from "../action_constants";

export default function (state = [], action) {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload.length >= 1 ? action.payload : state;
    default:
      return state;
  }
}
