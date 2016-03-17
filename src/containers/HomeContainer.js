import { connect } from 'react-redux';
import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    nav: state.nav // gives our component access to state through props.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }; // here we're mapping actions to props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);