import { activitiesRef } from '../config/firebase';

export const actionTypes = {
  FETCH_ACTIVITIES: 'ACTIVITIES/@FETCH',
  ADD_ACTIVITY: 'ACTIVITIES/@ADD'
};

export const addActivity = (name, action) => async dispatch => {
  activitiesRef.push().set({
    date: new Date().getTime(),
    task: name,
    action: action
  });
};

export const fetchActivities = () => async dispatch => {
  activitiesRef.limitToLast(5).on('value', snapshot => {
    const snapshotVal = snapshot.val();

    const list = (snapshotVal
      ? Object.keys(snapshotVal).map(item => {
          return {
            id: item,
            date: snapshotVal[item].date,
            task: snapshotVal[item].task,
            action: snapshotVal[item].action
          };
        })
      : []
    ).sort((a, b) => new Date(b.date) - new Date(a.date));

    dispatch({
      type: actionTypes.FETCH_ACTIVITIES,
      payload: list
    });
  });
};
