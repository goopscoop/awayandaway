import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HomeContainer from './containers/HomeContainer';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));