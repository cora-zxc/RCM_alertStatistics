import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyMainArea from './MyMainArea';
import MySide from './MySide';

ReactDOM.render(
  <React.StrictMode>
    <MyMainArea />
    <MySide />
  </React.StrictMode>,
  document.getElementById('root')
);