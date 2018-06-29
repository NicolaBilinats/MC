import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Burger.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import BMenu from "./Burger";
import Container from "./Gallery";
import Title from "./Title";

ReactDOM.render(<BMenu />, document.getElementById('root'));
ReactDOM.render(<Container />, document.getElementById('gallery'));
ReactDOM.render(<Title />, document.getElementById('title'));

registerServiceWorker();
