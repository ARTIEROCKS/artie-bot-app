import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import login from './login';
import robot from './robot';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const ConfigureStore = () => {

      const store = createStore(
        combineReducers({
            login,
            robot
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}