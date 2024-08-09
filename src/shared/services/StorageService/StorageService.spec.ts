import { uuid } from 'helpers';
import { StorageService } from './StorageService';

const token = uuid();

jest.mock('react-native-mmkv', () => jest.requireActual('react-native-mmkv'));

describe('StorageService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should set data with correct key in storage', async () => {
    StorageService.setItem = jest.fn((_, value) => Promise.resolve(value));

    const actual = await StorageService.setItem('token', token);

    expect(actual).toBe(token);
    expect(StorageService.setItem).toHaveBeenCalledWith('token', token);
  });

  it('Should get data with correct key from storage', async () => {
    await StorageService.setItem('token', token);

    StorageService.getItem = jest.fn(_ => Promise.resolve(token));

    const actual = await StorageService.getItem('token');

    expect(actual).toBe(token);
    expect(StorageService.getItem).toHaveBeenCalled();
    expect(StorageService.getItem).toHaveBeenCalledWith('token');
  });

  it('Should get data with incorrect key from storage', async () => {
    await StorageService.setItem('token', token);

    StorageService.getItem = jest.fn(_ => Promise.resolve(token));

    const actual = await StorageService.getItem('temp');

    expect(actual).toBe(token);
    expect(StorageService.getItem).toHaveBeenCalled();
    expect(StorageService.getItem).toHaveBeenCalledWith('temp');
  });

  it('Should successfully delete data from storage', async () => {
    expect.assertions(1);

    const actual = await StorageService.removeItem('token');

    expect(actual).toBeUndefined();
  });

  it('Should handle error when setItem fails', async () => {
    const error = new Error('Failed to set item');
    StorageService.setItem = jest.fn().mockRejectedValue(error);

    await expect(StorageService.setItem('token', token)).rejects.toThrow(
      'Failed to set item',
    );
  });

  it('Should return null when item does not exist in getItem', async () => {
    StorageService.getItem = jest.fn().mockResolvedValue(null);

    const actual = await StorageService.getItem('nonexistentKey');

    expect(actual).toBeNull();
    expect(StorageService.getItem).toHaveBeenCalledWith('nonexistentKey');
  });

  it('Should handle error when getItem fails', async () => {
    const error = new Error('Failed to get item');
    StorageService.getItem = jest.fn().mockRejectedValue(error);

    await expect(StorageService.getItem('token')).rejects.toThrow(
      'Failed to get item',
    );
  });

  it('Should handle error when removeItem fails', async () => {
    const error = new Error('Failed to delete item');
    StorageService.removeItem = jest.fn().mockRejectedValue(error);

    await expect(StorageService.removeItem('token')).rejects.toThrow(
      'Failed to delete item',
    );
  });

  it('Should confirm deletion in removeItem', async () => {
    StorageService.removeItem = jest.fn().mockResolvedValue(true);

    const actual = await StorageService.removeItem('token');

    expect(actual).toBe(true);
    expect(StorageService.removeItem).toHaveBeenCalledWith('token');
  });

  it('Should return undefined if removeItem completes without a value', async () => {
    StorageService.removeItem = jest.fn().mockResolvedValue(undefined);

    const actual = await StorageService.removeItem('token');

    expect(actual).toBeUndefined();
    expect(StorageService.removeItem).toHaveBeenCalledWith('token');
  });
});
