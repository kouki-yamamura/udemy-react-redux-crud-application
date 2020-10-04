import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
//storeが全コンポーネントに渡す為のコンポーネント
//全階層のコンポーネントでstateを変更できるようになる。
import { Provider } from 'react-redux';
import './index.css';
import reducer from '.reducers';

import App from '.components/App';
import * as serviceWorker from './serviceWorker';

//唯一のstore
// 全てのstateはこのstoreに集約されている。
const store = createStore(reducer)

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
