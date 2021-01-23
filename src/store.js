import { createStore } from 'redux';
import { counter } from './reducers';

// Set up default state
const defaultState = {
    count: 0
}

export const store = createStore(counter, defaultState);