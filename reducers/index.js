import { combineReducers } from 'redux';
import getcategoryJoke from './reducer-joke';
import getcategories from './reducer';

const rootReducer = combineReducers({
    getcategoryJoke,
    getcategories
})

export default rootReducer;