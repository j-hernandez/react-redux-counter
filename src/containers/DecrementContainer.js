import React from 'react';
import { connect, connectAdvanced } from 'react-redux';
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

function mapStateToProps(state) {
    return {
        counterValue: state.count
    }
}

// let connector = connect(null, mapDispatchToProps);
// connector(Decrement);
export default connect(null, mapDispatchToProps)(Decrement);