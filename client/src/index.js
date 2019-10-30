import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

import Game from './components/Game/Game';
import './index.css';
import {Provider} from 'react-redux';
import store from './components/config/store';
import App from './App';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

