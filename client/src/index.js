import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import reducers from './reducers';
import middleware from './middleware';
import { Provider } from 'react-redux';
import './index.css';
import 'antd/dist/antd.css';

const store = createStore(reducers, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
