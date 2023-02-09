import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {createLogger} from 'redux-logger'
import  reducer  from "./slices";
const logger =createLogger({
    
});
const persistConfig = {
      key: 'root',
      storage,
    }
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
      reducer: persistedReducer,
      middleware:[logger]
});
export const persistor = persistStore(store);
