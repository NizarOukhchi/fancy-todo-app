import { tasksRef } from '../config/firebase';

export const actionTypes = {
  ADD_TASK: 'TASKS/@ADD',
  TOGGLE_TASK: 'TASKS/@TOGGLE',
  FETCH_TASKS: 'TASKS/@FETCH'
};

export const addTask = name => async dispatch => {
  tasksRef.push().set({ name: name, done: false });

  dispatch({
    type: actionTypes.ADD_TASK,
    payload: name
  });
};

export function toggleTask(task) {
  return {
    type: actionTypes.TOGGLE_TASK,
    payload: task
  };
}

export const fetchTasks = () => async dispatch => {
  tasksRef.on('value', snapshot => {
    const snapshotVal = snapshot.val();
    
    const list = snapshotVal
      ? Object.keys(snapshotVal).map(item => {
          return {
            id: item,
            name: snapshotVal[item].name,
            done: snapshotVal[item].done
          };
        })
      : [];

    dispatch({
      type: actionTypes.FETCH_TASKS,
      payload: list
    });
  });
};
