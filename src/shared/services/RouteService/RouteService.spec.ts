import {
  CommonActions,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';
import { Routes } from 'navigation';
import { RouteService } from './RouteService';

jest.mock('@react-navigation/native', () => ({
  createNavigationContainerRef: jest.fn(() => ({
    current: {
      dispatch: jest.fn(),
      canGoBack: jest.fn(() => true),
    },
  })),
  CommonActions: {
    navigate: jest.fn(),
    goBack: jest.fn(),
    reset: jest.fn(),
    setParams: jest.fn(),
  },
  DrawerActions: {
    openDrawer: jest.fn(),
    closeDrawer: jest.fn(),
  },
  StackActions: {
    pop: jest.fn(),
    popToTop: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
  },
}));

describe('RouteService', () => {
  it('should navigate to a route with params', () => {
    const params = { value: 'value' };

    RouteService.navigate(Routes.DASHBOARD, { value: 'value' });

    expect(RouteService.navigationRef.current?.dispatch).toHaveBeenCalledWith(
      CommonActions.navigate({ name: Routes.DASHBOARD, params }),
    );
  });

  it('should open the drawer', () => {
    RouteService.openDrawer();

    expect(RouteService.navigationRef.current?.dispatch).toHaveBeenCalledWith(
      DrawerActions.openDrawer(),
    );
  });

  it('should close the drawer', () => {
    RouteService.closeDrawer();

    expect(RouteService.navigationRef.current?.dispatch).toHaveBeenCalledWith(
      DrawerActions.closeDrawer(),
    );
  });

  it('should go back if possible', () => {
    RouteService.goBack();

    expect(RouteService.navigationRef.current?.canGoBack).toHaveBeenCalled();
    expect(RouteService.navigationRef.current?.dispatch).toHaveBeenCalledWith(
      CommonActions.goBack(),
    );
  });

  it('should pop to the previous screen', () => {
    const screenCount = 1;

    RouteService.pop(screenCount);

    expect(RouteService.navigationRef.current?.dispatch).toHaveBeenCalledWith(
      StackActions.pop(screenCount),
    );
  });

  it('should pop to the top of the stack', () => {
    RouteService.popToTop();

    expect(RouteService.navigationRef.current?.dispatch).toHaveBeenCalledWith(
      StackActions.popToTop(),
    );
  });

  it('should set navigation parameters', () => {
    RouteService.setParams({ value: 'value' });

    expect(RouteService.navigationRef.current?.dispatch).toHaveBeenCalledWith(
      CommonActions.setParams({ value: 'value' }),
    );
  });

  it('should push a new route onto the stack', () => {
    RouteService.push(Routes.DASHBOARD, { value: 'value' });

    expect(RouteService.navigationRef.current?.dispatch).toHaveBeenCalledWith(
      StackActions.push(Routes.DASHBOARD, { value: 'value' }),
    );
  });

  it('should replace the current route with a new one', () => {
    RouteService.replace(Routes.DASHBOARD, { value: 'value' });

    expect(RouteService.navigationRef.current?.dispatch).toHaveBeenCalledWith(
      StackActions.replace(Routes.DASHBOARD, { value: 'value' }),
    );
  });

  it('should reset the navigation state', () => {
    RouteService.reset(Routes.DASHBOARD, { value: 'value' });

    expect(RouteService.navigationRef.current?.dispatch).toHaveBeenCalledWith(
      CommonActions.reset({
        index: 0,
        routes: [{ name: Routes.DASHBOARD, params: { value: 'value' } }],
      }),
    );
  });
});
