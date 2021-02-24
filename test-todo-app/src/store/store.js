import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMIddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import listReducer from './reducers/listReducer';

const reducerBatch = combineReducers({
  list: listReducer,
  form: formReducer,
});

const store = createStore(reducerBatch, applyMiddleware(thunkMIddleware));

export default store;
window.store = store;
