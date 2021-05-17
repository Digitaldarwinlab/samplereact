import { combineReducers } from 'redux';
import changeTheNumber from './updown';
import checkNotNull from './validation';

const rootReducer=combineReducers({
    changeTheNumber,
    checkNotNull

});
export default rootReducer;