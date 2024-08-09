import Toast from 'react-native-toast-message';
import { AnyType } from 'helpers';
import { ToastService } from './ToastService';

describe('ToastService', () => {
  afterEach(() => {
    jest.resetModules();
  });

  describe('onSuccess', () => {
    it('onSuccess should call onBase with success type', () => {
      const params = { title: 'Success', description: 'Description' };

      ToastService.onSuccess(params);

      expect(Toast.show).toHaveBeenCalledWith({
        text1: 'Success',
        text2: 'Description',
        type: 'success',
        position: 'bottom',
        autoHide: true,
        topOffset: 52,
        visibilityTime: 3000,
      });
    });

    it('onSuccess should call onBase with success type without description', () => {
      const params = {
        title: 'Success',
      };

      ToastService.onSuccess(params);

      expect(Toast.show).toHaveBeenCalledWith({
        text1: 'Success',
        text2: '',
        type: 'success',
        position: 'bottom',
        autoHide: true,
        topOffset: 52,
        visibilityTime: 3000,
      });
    });

    it('onSuccess should call onBase with success type with position top', () => {
      const params = {
        title: 'Success',
        position: 'top' as AnyType,
      };

      ToastService.onSuccess(params);

      expect(Toast.show).toHaveBeenCalledWith({
        text1: 'Success',
        text2: '',
        type: 'success',
        position: 'top',
        autoHide: true,
        topOffset: 52,
        visibilityTime: 3000,
      });
    });
  });

  describe('onDanger', () => {
    it('onDanger should call onBase with danger type', () => {
      const params = { title: 'Danger', description: 'Description' };

      ToastService.onDanger(params);

      expect(Toast.show).toHaveBeenCalledWith({
        text1: 'Danger',
        text2: 'Description',
        type: 'danger',
        position: 'bottom',
        autoHide: true,
        topOffset: 52,
        visibilityTime: 3000,
      });
    });

    it('onDanger should call onBase with danger type without description', () => {
      const params = {
        title: 'Danger',
      };

      ToastService.onDanger(params);

      expect(Toast.show).toHaveBeenCalledWith({
        text1: 'Danger',
        text2: '',
        type: 'danger',
        position: 'bottom',
        autoHide: true,
        topOffset: 52,
        visibilityTime: 3000,
      });
    });

    it('onDanger should call onBase with danger type with position top', () => {
      const params = {
        title: 'Danger',
        position: 'top' as AnyType,
      };

      ToastService.onDanger(params);

      expect(Toast.show).toHaveBeenCalledWith({
        text1: 'Danger',
        text2: '',
        type: 'danger',
        position: 'top',
        autoHide: true,
        topOffset: 52,
        visibilityTime: 3000,
      });
    });
  });

  describe('onWarning', () => {
    it('onWarning should call onBase with warning type', () => {
      const params = { title: 'Info', description: 'Description' };

      ToastService.onWarning(params);

      expect(Toast.show).toHaveBeenCalledWith({
        text1: 'Info',
        text2: 'Description',
        type: 'warning',
        position: 'bottom',
        autoHide: true,
        topOffset: 52,
        visibilityTime: 3000,
      });
    });

    it('onWarning should call onBase with warning type without description', () => {
      const params = {
        title: 'Info',
      };

      ToastService.onWarning(params);

      expect(Toast.show).toHaveBeenCalledWith({
        text1: 'Info',
        text2: '',
        type: 'warning',
        position: 'bottom',
        autoHide: true,
        topOffset: 52,
        visibilityTime: 3000,
      });
    });

    it('onWarning should call onBase with warning type with position top', () => {
      const params = {
        title: 'Info',
        position: 'top' as AnyType,
      };

      ToastService.onWarning(params);

      expect(Toast.show).toHaveBeenCalledWith({
        text1: 'Info',
        text2: '',
        type: 'warning',
        position: 'top',
        autoHide: true,
        topOffset: 52,
        visibilityTime: 3000,
      });
    });
  });

  describe('onHide', () => {
    it('onHide should call Toast.hide', () => {
      ToastService.onHide();

      expect(Toast.hide).toHaveBeenCalled();
    });
  });
});
