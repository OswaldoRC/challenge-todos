import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import todo from './redux/todo.reducer';

const loggerMiddleware = createLogger();

export const store = createStore(
    todo,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ) 
);