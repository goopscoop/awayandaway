import React from 'react';
import NavBar from '../shared/NavBar';
import Footer from '../shared/Footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import books from '../../utils/bookData';

const Books2 = () => {

  const renderBookList = () => books.map((el, i )=>{
    return (
      <div className="col-sm-3">
        <nav className="cl-effect-9">
          <a href="#" data-hover="Desultory">
            <span><img src={el.img} className="img-responsive"/></span>
            <span style={{textAlign: 'center'}}>{el.cta}</span>
          </a>
        </nav>
      </div>
    );
  })

  return (
    <div className="row">
      <div
        className="home-bg">
        <ReactCSSTransitionGroup
          transitionName="vanishIn"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={500}>
          <div key="1" className="col-md-8 col-md-offset-2 content">
            <h1>
              Books
            </h1>
            <NavBar currentPage="books"/>
            <hr/>
            <div className="row" >
              {
                renderBookList()
              }
            </div>
          </div>
          <Footer/>
        </ReactCSSTransitionGroup>
      </div>
    </div>
  );
}

export default Books2;