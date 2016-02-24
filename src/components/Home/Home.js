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
            transitionAppearTimeout={2000}
            transitionEnterTimeout={500}>
          <div key="1" className="col-md-8 col-md-offset-2 content-light">
              <h1

                style={{
                  padding: '5rem 0 4rem'
                }}>
                Away and Away
              </h1>
              <h2 className="center">-~-</h2>
              <h2
                style={{
                  padding: '2rem 0 5rem'
                }}>
                Home of Author S.C. Barrus
              </h2>
          </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Home;