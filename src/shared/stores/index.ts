import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  ActionCreator,
  ActionCreatorsMapObject,
  Action,
  AsyncThunk,
  bindActionCreators,
  configureStore,
} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { PERSIST, REHYDRATE, persistStore } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { isDev } from 'helpers';
import { ReactotronService } from 'services';
import { rootReducer } from './rootReducer';

const reactotronEnhancer = ReactotronService.init().createEnhancer!();

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
      getDefaultMiddleware(middlewareConfig).concat(isDev ? [logger] : []),
    enhancers: getDefaultEnhancers =>
      getDefaultEnhancers().concat(isDev ? [reactotronEnhancer] : []),
  });
};

export const store = createStore();

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, Action>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
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
