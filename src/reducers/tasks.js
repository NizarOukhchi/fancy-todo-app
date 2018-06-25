import update from 'immutability-helper';
import { actionTypes } from '../actions/tasks';
const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_TASKS:
      return {
        ...state,
        list: action.payload
      };
    case actionTypes.TOGGLE_TASK:
      const indexToUpdate = state.list.indexOf(action.payload);
      return {
        ...state,
        list: update(state.list, {
          [[indexToUpdate]]: { done: { $set: !state.list[indexToUpdate].done } }
        })
      };
    default:
      return state;
  }
}
