import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'
import { Provider } from 'react-redux';
import Home from './components/Home'
import BooksContainer from './containers/BooksContainer';
import About from './components/About';
import Footer from './components/shared/Footer';
import configureStore from './redux/configureStore';
import './style/style.css';

const store = configureStore();

ReactDOM.render((
  <div
    className="home-bg">
    <div className="row">
        <div key="1" className="col-md-10 col-md-offset-1 content">      
          <Provider store={store}>
            <Router history={hashHistory}>
              <Route path="/" component={Home}/>
              <Route path="/books" component={BooksContainer}/>
              <Route path="/about" component={About}/>
            </Router>
          </Provider>
        </div>
        <Footer/>
    </div>
  </div>
), document.getElementById('app'));

// 
