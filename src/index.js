import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';

injectGlobal`

  body {
      font-size: 16px;
      margin: 0;
      font-family: 'Helvetica', 'sans-serif';
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
