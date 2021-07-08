// TODO: add and export your own actions
import { GET_MESSAGES, CREATE_MESSAGE } from '../action_constants';

export function getMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
  return {
    type: GET_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const body = { author: author, content: content };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise[-1]
  };
}
