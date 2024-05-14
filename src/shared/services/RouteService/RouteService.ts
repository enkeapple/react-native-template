import {
  CommonActions,
  createNavigationContainerRef,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';
import { AnyType } from 'helpers';
import { RootStackParamList, Routes } from 'navigation';

const navigationRef = createNavigationContainerRef();

const navigate = <T extends Routes>(
  name: T,
  params?: RootStackParamList[T],
) => {
  if (navigationRef?.current) {
    navigationRef.current?.dispatch(CommonActions.navigate({ name, params }));
  }
};

const openDrawer = () => {
  if (navigationRef?.current) {
    navigationRef.current?.dispatch(DrawerActions.openDrawer());
  }
};

const closeDrawer = () => {
  if (navigationRef?.current) {
    navigationRef.current?.dispatch(DrawerActions.closeDrawer());
  }
};

const goBack = () => {
  if (navigationRef?.current && navigationRef.current?.canGoBack()) {
    navigationRef.current?.dispatch(CommonActions.goBack());
  }
};

const pop = (screenCount?: number) => {
  if (navigationRef?.current && navigationRef.current?.canGoBack()) {
    navigationRef.current?.dispatch(StackActions.pop(screenCount));
  }
};

const popToTop = () => {
  if (navigationRef?.current && navigationRef.current?.canGoBack()) {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }
};

const setParams = (params?: AnyType) => {
  navigationRef.current?.dispatch(CommonActions.setParams(params));
};

const push = <T extends Routes>(name: T, params?: RootStackParamList[T]) => {
  if (navigationRef?.current) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
  }
};

const replace = <T extends Routes>(name: T, params?: RootStackParamList[T]) => {
  if (navigationRef?.current) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  }
};

const reset = <T extends Routes>(name: T, params?: RootStackParamList[T]) => {
  if (navigationRef?.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      }),
    );
  }
};

export const RouteService = {
  navigationRef,
  navigate,
  goBack,
  pop,
  popToTop,
  push,
  reset,
  replace,
  openDrawer,
  closeDrawer,
  setParams,
};
