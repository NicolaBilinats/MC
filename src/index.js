import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Burger.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import BMenu from "./Burger";
import Container from "./Gallery";
import {Clock} from "./Timer";

ReactDOM.render(<BMenu />, document.getElementById('root'));
ReactDOM.render(<Container />, document.getElementById('gallery'));
ReactDOM.render(<Clock />, document.getElementById('timer'));

registerServiceWorker();
