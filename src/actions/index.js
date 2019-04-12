import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE } from './action-type';

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value,
});

export const sendMessage = (message, userid) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userid,
  }
})