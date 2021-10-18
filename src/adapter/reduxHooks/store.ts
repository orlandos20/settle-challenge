import { configureStore, ThunkAction, Action, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//reducers
import ConversionRateReducer, {persistConfig as ConversionRateConfig} from '../feature/ConversionSlice';
import OrderReducer, {persistConfig as OrderConfig} from '../feature/OrderSlice';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  //You can add a blacklist here to exclude reducers
  //Manual Persist can be used to start the persistence on user logged in
  // manualPersist: true
}


//TODO: fix this any later
const rootReducer: CombinedState<any> = combineReducers({
  router: connectRouter(history),
  conversion: persistReducer<any,any>(ConversionRateConfig, ConversionRateReducer),
  orders: persistReducer<any,any>(OrderConfig, OrderReducer)
})

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger, routerMiddleware(history)),
  devTools: process.env.NODE_ENV !== 'production',
});

export let persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;