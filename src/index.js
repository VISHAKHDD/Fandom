import React from 'react';
import ReactDOM from 'react-dom';
import MainFile from './Components/MainFile';
import * as serviceWorker from './serviceWorker';
import  'react-bootstrap';
ReactDOM.render(<MainFile />, document.getElementById('root'));
serviceWorker.unregister();
