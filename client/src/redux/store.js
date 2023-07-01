import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import userSlice from './userslice'
import postSlice from './postSlice'

const presistConfig = { key: 'keep-picktok-store', storage }

const reducer = combineReducers({
  user: userSlice,
  post: postSlice
})


const presistedReducer = persistReducer(presistConfig, reducer)
export const store = configureStore({
  reducer: presistedReducer,
})

export const presistedStore = persistStore(store)
