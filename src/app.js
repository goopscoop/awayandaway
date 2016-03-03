import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'
import Books from './components/Books';
import { Provider } from 'react-redux';
import HomeContainer from './containers/HomeContainer';
import BooksContainer from './containers/BooksContainer';
import configureStore from './redux/configureStore';
import './style/style.css';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={HomeContainer}/>
        <Route path="/books" component={BooksContainer}/>
      </Router>
    </Provider>
), document.getElementById('app'));