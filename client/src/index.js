import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Game from './Game';
import './index.css';
import {Provider} from 'react-redux';
import store from './components/config/store';

ReactDOM.render(<Provider store={store}>
    <Game />
</Provider>, document.getElementById('root'));

