import { connect } from 'react-redux';
import Books2 from '../components/Books/Books2';
import * as actions from '../redux/modules/books';

function mapStateToProps(state) {
  return {
    books: state.books // gives our component access to state through props.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentlySelected: (i) => dispatch(actions.setCurrentlySelected(i)),
    openPreview: () => dispatch(actions.openPreview()),
    closePreview: () => dispatch(actions.closePreview()),
    expandPreview: () => dispatch(actions.expandPreview()),
    retractPreview: () => dispatch(actions.retractPreview()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books2);