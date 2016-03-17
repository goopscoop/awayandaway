import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import books from './modules/books';

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware( loggerMiddleware )(createStore); // apply logger to redux

const reducer = combineReducers({
  books
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
