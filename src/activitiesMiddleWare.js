import { actionTypes as tasksActionTypes } from './actions/tasks';
import { addActivity } from './actions/activities';

const activitiesMiddleWare = store => next => action => {
  //if (action.type === activitiesActionTypes.ADD_ACTIVITY) return;

  if (action.type === tasksActionTypes.ADD_TASK) {
    store.dispatch(addActivity(action.payload, 'Task created'));
  } else if (action.type === tasksActionTypes.TOGGLE_TASK) {
    store.dispatch(
      addActivity(
        action.payload.name,
        action.payload.done ? 'Task completed' : 'Task not completed'
      )
    );
  }
  next(action);
};

export default activitiesMiddleWare;
