// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers, createStore, applyMiddleware } from 'redux';
// reducers
import { CampusReducer } from './reducer/campusreducer';
import thunk from 'redux-thunk';


// Application Reducers
const rootReducer = combineReducers({
    CampusReducer
});

export let store = createStore(rootReducer,{},applyMiddleware(thunk));
