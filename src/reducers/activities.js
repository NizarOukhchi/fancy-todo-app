import { actionTypes } from '../actions/activities';
const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_ACTIVITIES:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
