import uuid from 'uuid/v4';
import { NEW_MESSAGE, SET_USERNAME } from "./types";

export const newMessage = ({ text, username }) => {
  return {
    type: NEW_MESSAGE,
    item: {
      id: uuid(),
      text,
      username,
      timestamp: Date.now(),
    }
  }
};

export const setUsername = username => ({ type: SET_USERNAME, username });

export const createReaction = ({ type, emoji, username, messageId }) => ({
  type,
  item: {
    id: uuid(),
    timestamp: Date.now(),
    emoji,
    username,
    messageId
  }
});
