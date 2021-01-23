import Increment from '../components/Increment';
import { connect } from 'react-redux';

import { actionIncrement } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        // Translate redux dispatch into props for our Increment component
        handleClick: () => {
            dispatch(actionIncrement())
        }
    }
}

export default connect(null, mapDispatchToProps)(Increment);