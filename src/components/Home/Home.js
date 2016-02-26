import React from 'react';
// import BookSelector from './BookSelector';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';
import '../../style/style.css';

class Home extends React.Component {

  render(){
    return (
      <div
        className="home-bg"
        style={{
          minHeight: '100%'
        }}>
        <div className="row">
          <ReactCSSTransitionGroup
            transitionName="vanishIn"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={500}>
            <div key="1" className="col-md-8 col-md-offset-2 content-light">
                <h1 style={{padding: '5rem 0 4rem'}}>
                  Away and Away
                </h1>
                <p style={{ textAlign: 'center', fontSize: '30px' }}>-~-</p>
                <h2 style={{ padding: '2rem 0 5rem' }}>
                  Home of Author S.C. Barrus
                </h2>
            </div>
          </ReactCSSTransitionGroup>
        </div>
        <div className="row">
          <ReactCSSTransitionGroup
            transitionName="vanishIn"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={500}>
            <div key={1} className="col-md-8 col-md-offset-2  aaa-nav">
              <nav className="cl-effect-9">
                <a href="#" data-hover="Desultory">
                  <span>Books</span>
                  <span>Adventure Awaits</span>
                </a>
              </nav>
            </div>
          </ReactCSSTransitionGroup>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 footer">
            <footer >
              <ul>
                <li>test</li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;