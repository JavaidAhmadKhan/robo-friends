//jshint esversion:6
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// import Carousel from 'react-bootstrap/Carousel';

ReactDOM.render( < App / > , document.getElementById('root'));
serviceWorker.unregister();