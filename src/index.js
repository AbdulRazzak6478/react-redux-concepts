import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';
import { store } from './redux/index.js';

// import logger from 'redux-logger';
// import thunk from "redux-thunk";
// import {  createStore ,applyMiddleware ,combineReducers} from "redux";
// import { accountsReducer } from "./redux/account-reducer.jsx";
// import { bonusReducer } from "./redux/bonus-reducer.jsx";



// export const store = createStore( 
//     combineReducers({
//         accounts:accountsReducer,
//         bonus:bonusReducer,
//     }),
//     // applyMiddleware(logger,thunk)
//     applyMiddleware(logger.default,thunk)
// );


// console.log(store.getState());
// console.log(store.dispatch(increment_action()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
