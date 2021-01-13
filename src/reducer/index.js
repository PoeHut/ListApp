import {combineReducers}  from 'redux'
import * as BookReducer  from './BookReducer'

export default combineReducers({
    bookData: BookReducer.getBook
})