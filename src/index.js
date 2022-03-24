import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi!', likesCount: 15},
    {id: 2, message: 'This is React...', likesCount: 20},
    {id: 3, message: 'My post!!!', likesCount: 100},
]

let dialogs = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Fedor'},
    {id: 3, name: 'Peter'},
    {id: 4, name: 'Oleg'},
]

let messages = [
    {id: 1, message: 'Hi!'},
    {
        id: 2,
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda ducimus explicabo illum, modi repellat.'
    },
    {
        id: 3,
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto explicabo fugiat id illo libero magni molestiae odit optio, sunt voluptates.'
    },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
