import { combineReducers } from 'redux';
import activitiesReducer from './activities';
import tasksReducer from './tasks';

export default combineReducers({
  activities: activitiesReducer,
  tasks: tasksReducer
});
