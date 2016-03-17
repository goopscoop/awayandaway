import { connect } from 'react-redux';
import Books from '../components/Books';
import * as actions from '../redux/modules/books';

function mapStateToProps(state) {
  return {
    books: state.books,
    nav: state.nav
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
)(Books);