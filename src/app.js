import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'
import Home from './components/Home';
import Books from './components/Books';
import Books2 from './components/Books/Books2';
// import { Provider } from 'react-redux';
// import HomeContainer from './containers/HomeContainer';
// import configureStore from './redux/configureStore';
import './style/style.css';

// const store = configureStore();

// class App extends React.Component {
//   render(){
//     return(
//       <Provider store={store}>
//         <HomeContainer />
//       </Provider>
//     );
//   }
// }

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={Home}/>
      <Route path="/books" component={Books2}/>
    </Router>
), document.getElementById('app'));