import { connect } from 'react-redux';
import Home from '../components/Home/Home.js'

function mapStateToProps(state) {
  return {
    home: state.home // gives our component access to state through props.toDoApp
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