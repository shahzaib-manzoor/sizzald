import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import {createLogger} from 'redux-logger'
import  reducer  from "./slices";
console.log(reducer)
const logger =createLogger({
    
})
const store = configureStore({
       reducer,
      middleware:[logger]
});

export default store;