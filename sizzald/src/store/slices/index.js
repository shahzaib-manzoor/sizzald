 import counterSliceReducers from "./counterSlice"
 import { combineReducers } from "@reduxjs/toolkit"
 const reducer =combineReducers({
    counter: counterSliceReducers
 })
export default reducer