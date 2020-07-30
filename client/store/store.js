import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './SingleOscillator';
import { createLogger } from 'redux-logger';

let middleware = [createLogger({ collapsed: true })];

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
