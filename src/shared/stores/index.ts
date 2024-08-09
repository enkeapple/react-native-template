import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  ActionCreator,
  ActionCreatorsMapObject,
  AnyAction,
  AsyncThunk,
  bindActionCreators,
  configureStore,
} from '@reduxjs/toolkit';
import { PERSIST, REHYDRATE, persistStore } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { profileApi } from 'api';
import { isDev } from 'helpers';
import { createLogger } from 'redux-logger';
import { rootReducer } from './rootReducer';

const middlewareConfig = {
  serializableCheck: {
    ignoredActions: [REHYDRATE, PERSIST],
  },
};

const createStore = () => {
  const logger = createLogger({
    collapsed: true,
  });

  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware(middlewareConfig)
        .concat(profileApi.middleware)
        .concat(isDev ? [logger] : []),
  });
};

export const store = createStore();

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;

export type BoundAsyncThunk<Action extends ActionCreator<any>> = (
  ...args: Parameters<Action>
) => ReturnType<ReturnType<Action>>;

export type BoundActions<A extends ActionCreatorsMapObject> = {
  [key in keyof A]: A[key] extends AsyncThunk<any, any, any>
    ? BoundAsyncThunk<A[key]>
    : A[key];
};

export const useTypedActionCreators = <
  A extends ActionCreatorsMapObject = ActionCreatorsMapObject,
>(
  actions: A,
): BoundActions<A> => {
  const dispatch = useTypedDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), []);
};
