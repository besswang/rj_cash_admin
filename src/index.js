import React from 'react';
import ReactDOM from 'react-dom';
import 'element-theme-default';
import './index.css';
// import App from './App';
// import Login from './components/login'
import SetRouter from './routes/index'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render( <SetRouter / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
