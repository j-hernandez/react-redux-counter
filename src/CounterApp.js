import React from 'react';
import Output from './containers/OutputContainer';
import Increment from './containers/IncrementContainer';
import Decrement from './containers/DecrementContainer';

const CounterApp = props => (
    <div>
        <h1>Counter App</h1>
        <Output />
        <Increment />
        <Decrement />
    </div>
)

export default CounterApp;