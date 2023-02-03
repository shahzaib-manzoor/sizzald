 import counterSliceReducers from "./counterSlice"
 import { combineReducers } from "@reduxjs/toolkit"
import layoutSlice from "./layoutSlice"

 const reducer =combineReducers({
    counter: counterSliceReducers,
    layout:layoutSlice,
 })
export default reducer