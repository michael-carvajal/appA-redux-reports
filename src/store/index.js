import reportsReducer from './reports';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
const logger = require("redux-logger").default;
const rootReducer = combineReducers({
    reports : reportsReducer
});

const composeEnhancers =
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};


export default configureStore;
