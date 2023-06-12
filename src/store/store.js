
import { createStore, applyMiddleware,combineReducers  } from 'redux';
import thunk  from 'redux-thunk';
import authReducer from './reducers';

// const initialState = {};

const rootReducer = combineReducers({
    auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;