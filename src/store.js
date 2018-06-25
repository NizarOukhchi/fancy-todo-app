import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import activitiesMiddleWare from './activitiesMiddleWare';
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(activitiesMiddleWare, reduxThunk))
);

export default store;
