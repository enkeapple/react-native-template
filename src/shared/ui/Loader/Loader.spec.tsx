import React from 'react';
import { render, screen } from '@testing-library/react-native';
import * as Unistyles from 'react-native-unistyles';
import { lightColors, lightTheme } from 'themes';
import { AnyType } from 'helpers';
import { Loader } from './Loader';

const useStyles = jest
  .spyOn(Unistyles, 'useStyles')
  .mockImplementation(jest.fn());

const mockStyles: AnyType = {
  theme: lightTheme,
  breakpoint: 'portrait',
  styles: {
    layout: () => ({
      justifyContent: 'center',
      alignItems: 'center',
    }),
  },
};

describe('Loader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default props', () => {
    useStyles.mockReturnValue(mockStyles);

    render(<Loader testID="progressbar" />);

    const loader = screen.getByTestId('progressbar');

    expect(loader).toBeTruthy();
    expect(loader.props.color).toBe('#FFFFFF');
    expect(loader.props.size).toBe('small');
  });

  it('renders with custom color and size', () => {
    useStyles.mockReturnValue(mockStyles);

    render(<Loader testID="progressbar" color="bg_blue" size="large" />);

    const loader = screen.getByTestId('progressbar');

    expect(loader).toBeTruthy();
    expect(loader.props.color).toBe(lightColors.bg_blue);
    expect(loader.props.size).toBe('large');
  });
});
