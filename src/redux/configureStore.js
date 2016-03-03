import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import home from './modules/home';
import books from './modules/books';

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware( loggerMiddleware )(createStore); // apply logger to redux

const reducer = combineReducers({
  home,
  books
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
