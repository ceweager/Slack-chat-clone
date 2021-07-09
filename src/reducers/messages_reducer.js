import { GET_MESSAGES, CREATE_MESSAGE } from '../action_constants';

export default function (state = [], action) {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE:
      const array = state.slice(0);
      array.push(action.payload);
      return array;
    default:
      return state;
  }
}
