// TODO: add and export your own actions
import { GET_MESSAGES, CREATE_MESSAGE, SELECT_CHANNEL } from '../action_constants';

export function getMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());
  return {
    type: GET_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}

export function updateSelectedChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  }
}
