import React from 'react';
import Output from './containers/OutputContainer';
import Increment from './containers/IncrementContainer';

const CounterApp = props => (
    <div>
        <h1>Counter App</h1>
        <Output />
        <Increment />
    </div>
)

export default CounterApp;