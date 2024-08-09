import { Dimensions } from 'react-native';
import { scale } from './Dimensions';

describe('Dimensions', () => {
  it('Should correctly scale size based on device width', () => {
    const { width } = Dimensions.get('window');

    const size = 10;

    const expectedScaledSize = (width / 375) * size;

    const result = scale(size);

    expect(result).toEqual(expectedScaledSize);
  });
});
