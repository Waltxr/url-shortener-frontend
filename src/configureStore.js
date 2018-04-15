import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import reduxThunk from 'redux-thunk'

const initailState = {
  modalOpen: false
};

const configureStore = () => {
  return createStore(
    rootReducer,
    initailState,
    applyMiddleware(reduxThunk)
  );
};

export default configureStore;
