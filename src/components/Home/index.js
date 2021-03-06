import React from 'react';
import NavBar from '../shared/NavBar';
import Footer from '../shared/Footer';
import BookSelector from '../shared/BookSelector';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../style/buttons.css';


class Home extends React.Component {

  render(){
    return (
      <div>
        <ReactCSSTransitionGroup
        transitionName={{
          appear: "vanishIn-appear",
          appearActive: 'vanishIn-appear-active',
          leave: 'vanishIn-leave',
          leaveActive: 'vanishIn-leave-active'
        }}
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionLeaveTimeout={1000}
        transitionEnterTimeout={1000}>
        <h1 style={{padding: '5rem 0 4rem'}}>
          Away and Away
        </h1>
        <p style={{ textAlign: 'center', fontSize: '30px' }}>-~-</p>
        <h2 style={{ padding: '2rem 0 5rem' }}>
          Home of Author S.C. Barrus
        </h2>
        <NavBar currentPage="home" />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Home;