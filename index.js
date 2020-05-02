import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './1maxburger/App';
//import Navigation  from './1annuburger/start'
//import Startfirst from './1annuburger/startfirst'
//import Order from './1annuburger/order'
//import Annuapp from './annuapp'
//import Anufirst from './anufirst'
import App from './Seventh/App' 
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Seven from './Seventh/seven'
import Reducer from './Seventh/Redux1'
//import State1 from './basics/state' 


let store=createStore(Reducer);

ReactDOM.render(<Provider store={store}><Seven /></Provider>, document.getElementById('root'));











// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
