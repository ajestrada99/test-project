import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import type { ThunkAction } from 'redux-thunk';
import { setupListeners } from '@reduxjs/toolkit/query/react'
import type { AnyAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { api } from '@/logic'

export const store = configureStore({
  reducer: {
    rootReducer, 
    [api.reducerPath]: api.reducer, 
  },
  devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true',
  middleware:(getDefaultMiddleware) => {
    return  getDefaultMiddleware().concat(api.middleware)
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
