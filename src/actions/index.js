// TODO: add and export your own actions
import GET_MESSAGES from '../action_constants';

export default function getMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
  console.log(promise);
  return {
    type: GET_MESSAGES,
    payload: promise
  };
}
