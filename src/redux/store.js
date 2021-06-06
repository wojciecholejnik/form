import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as formReducer } from './FormRedux';

const initialState = {
  form: {
    name: null,
    preparation_time: null,
    type: null,
    no_of_slices: null,
    diameter: null,
    spiciness_scale: null,
    slices_of_bread: null,
  },
};

const reducers = {
  form: formReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);