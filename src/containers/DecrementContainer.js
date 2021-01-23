import React from 'react';
import { connect } from 'react-redux';
import { actionDecrement } from '../actions';

const Decrement = props => (
    <>
    <button onClick={props.handleClick}>Decrement</button>
    <h4>Count from Decrement: {props.counterValue}</h4> 
    </>
);

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionDecrement());
        }
    }
}

// let connector = connect(null, mapDispatchToProps);
// connector(Decrement);
export default connect(null, mapDispatchToProps)(Decrement);