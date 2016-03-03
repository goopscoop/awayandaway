import React from 'react';
import NavBar from '../shared/NavBar';
import Footer from '../shared/Footer';
import PreviewPanel from './components/PreviewPanel';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Books2 extends React.Component {

  setFocusedOnBook = (e) => {
    e.preventDefault();
    this.props.setFocusOnBook();
  }

  renderBookList = () => this.props.books.books.map((el, i )=>{
    if (i < 4 ){
      return (
        <div key={i} className="col-sm-3">
          <nav className="cl-effect-9">
            <a 
              href="#"
              onMouseOver={this.props.setCurrentlySelected.bind(null, i)}
              onClick={this.setFocusedOnBook}
              data-hover="Desultory">
              <span>
                <img 
                  src={el.img}
                  className={`img-responsive`}
                />
              </span>
              <span style={{textAlign: 'center'}}>{el.cta}</span>
            </a>
          </nav>
        </div>
      );
    }
  })

  packagePreviewPanelProps = ()=>{
    return this.props.books.books[this.props.books.currentlySelected]
  }

  diplayPreviewPanel = () =>{
    if(this.props.books.isFocusedOnBook){
      return (
        <div className="row">
          <PreviewPanel 
            book={this.packagePreviewPanelProps()}
          />
        </div>
      )
    }
  }

  render(){
    return (
      <div className="row">
        <div
          className="home-bg">
            <div key="1" className="col-md-10 col-md-offset-1 content">
              <h1>
                Books
              </h1>
              <NavBar currentPage="books"/>
              <hr/>
              <div className="row" >
                <div className="col-md-12">
                  <div className="row">
                  <h4 style={{textAlign: 'left'}}>Novels</h4>
                  {
                    this.renderBookList()
                  }
                  </div>
                  {
                    this.diplayPreviewPanel()
                  }
                  <div className="row">
                  <h4 style={{textAlign: 'left'}}>Short Stories</h4>
                  {
                    this.renderBookList()
                  }
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
        </div>
      </div>
    );
  }
}

export default Books2;