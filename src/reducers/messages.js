import { getMessages } from '../static-data';
import { SEND_MESSAGE } from '../actions/action-type';
import _ from 'lodash';

export default function messages (state = getMessages(10), action){
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userid } = action.payload;
      const allUserMess = state[userid];
      const number = +_.keys(allUserMess).pop() + 1;
      return {
        ...state,
        [userid]: {
          ...allUserMess,
          [number]: {
            number,
            text: message,
            is_user_msg: true,
          }
        }
      }
    default:
      return state;      
  }
}