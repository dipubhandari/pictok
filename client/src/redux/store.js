import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userslice'
import storage from 'redux-persist/lib/storage'
import chatSlice from './chatSlice'
import { persistReducer, persistStore } from 'redux-persist'



const presistConfig = { key: 'keep-picktok-store', storage }
const presistedReducer = persistReducer(presistConfig, userSlice)
export const store = configureStore({
  reducer: {
    user: presistedReducer,
    chat: chatSlice
  }
})
export const presistedStore = persistStore(store)
