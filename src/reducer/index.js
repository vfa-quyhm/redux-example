import FormReducer from './FormReducer';
import {combineReducers} from 'redux';
import DATA,{FormType} from '../SauceAction/TypeAction';

const Freducer = require('../SauceAction/TypeAction').reducer;
console.log(DATA.increment());
console.log(DATA.decrement());
console.log(FormType);
export default combineReducers({
    form : Freducer
});