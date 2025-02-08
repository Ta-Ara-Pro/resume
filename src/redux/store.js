import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';
import dataReducer from './dataSlice'

// Persist configuration ======
// ============================
const persistConfig = {
    key:'root',
    storage,
};

// Combine Reducers ===========
// ============================
const rootReducer = combineReducers({
    data: dataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create Store ===============
// ============================
export const store = configureStore({
    reducer: persistedReducer,
    middleware: ( getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false // Required for redux-persist
        }),
});

// Persistor ==================
// ============================
export const persistor = persistStore(store)
