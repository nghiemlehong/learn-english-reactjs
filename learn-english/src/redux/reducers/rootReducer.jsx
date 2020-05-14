import {combineReducers} from 'redux';
import {filterModeReducer} from './filterModeReducer';
import {shouldShowFormReducer} from './shouldShowFormReducer';
import {wordReducer} from './wordReducer';


export const reducer = combineReducers({
    words : wordReducer,
    filterMode : filterModeReducer,
    shouldShowForm: shouldShowFormReducer
})