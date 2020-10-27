import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './app/reducers/rootReducer';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
