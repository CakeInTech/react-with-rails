import { FETCH_RANDOM_MESSAGE_SUCCESS } from '../actions/messagesActions';

const initialState = {
  message: null
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
};

export default messagesReducer;
