import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Sanity Check
// const aNumber = 42;
// window.aNumber = aNumber

// State
// - is always an object (key/value pairs)
// - is never mutated directly
const initialState = {
    value: 1
};

// Actions
// - always have a type
// - sometimes have a payload

// "increment" or "decrement"
const ACTION_INCREMENT = "increment"
const ACTION_DECREMENT = "decrement"

// It is a common practice to have action creator functions
function increment(){
    return {
        type: ACTION_INCREMENT
    }
}

function decrement(){
    return {
        type: ACTION_DECREMENT
    }
}
window.increment = increment;
window.decrement = decrement;

// Reducer
// - is always a function, and it accepts two arguments
// - first is the current state
// - second is an action
// - optional third: usually named for the data
function counter(state=initialState, action={type: ''}){
    // inspect the action and see what type it is
    switch (action.type){
        // The equivilant syntax to a if/else statement in Redux
        // if (action.type === ACTION_INCREMENT){
        case ACTION_INCREMENT:
        //do some stuff
            return {
                // ...state, // if our state were more complex, we would use the spread operator.
                value: state.value +1
            };
        break;
        // }else if (action.type === ACTION_DECREMENT){
        case ACTION_DECREMENT:
            return {
                value: state.value - 1
            };
        break;
        // }else {
        default:
            return state;
        break;
        // }
    }
}
window.counter = counter;

// Store
const store = createStore(counter);
window.store = store;