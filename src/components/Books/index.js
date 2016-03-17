import React from 'react';
import NavBar from '../shared/NavBar';
import Footer from '../shared/Footer';
import PreviewPanel from './components/PreviewPanel';
import BookList from './components/BookList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Books extends React.Component {

  packagePreviewPanelProps = ()=>{
    return {
      book: this.props.books.books[this.props.books.currentlySelected],
      isPreviewEpanded: this.props.books.isPreviewEpanded,
      closePreview: (e) => {
        e.preventDefault();
        this.props.closePreview();
      },
      expandPreview: (e) => {
        e.preventDefault();
        this.props.expandPreview();
      },
      retractPreview: (e) => {
        e.preventDefault();
        this.props.retractPreview();
      },
    };
  }

  bookListActions = {
    setCurrentlySelected: this.props.setCurrentlySelected,
    openPreview: (e) => {
      e.preventDefault();
      this.props.openPreview();
    },
  }

  diplayPreviewPanel = () =>{
    if(this.props.books.isPreviewOpen){
      return (
        <div className="row">
          <PreviewPanel
            {...this.packagePreviewPanelProps()}
          />
        </div>
      )
    }
  }

  render(){
    return (
      <div>
        <NavBar currentPage="Books"/>
        <hr/>
        <div className="row" >
          <div className="col-md-12">
            <div className="row" style={{marginBottom: '15px'}}>
            <BookList
              header="Novels"
              books={this.props.books.books}
              {...this.bookListActions}
            />
            </div>
            {
              this.diplayPreviewPanel()
            }
            <div className="row" style={{marginBottom: '15px'}}>
            <BookList
              header="Short Stories"
              books={this.props.books.books}
              {...this.bookListActions}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;