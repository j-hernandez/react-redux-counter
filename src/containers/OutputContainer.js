import Output from '../components/Output';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    // Translator - maps items from your Redux state to props for your Components
    return {
        amount: state.count
    }
}

export default connect(mapStateToProps)(Output);