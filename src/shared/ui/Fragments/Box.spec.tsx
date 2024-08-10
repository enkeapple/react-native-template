import React from 'react';
import { render, screen } from '@testing-library/react-native';
import * as Unistyles from 'react-native-unistyles';
import { lightTheme } from 'themes';
import { View } from 'react-native';
import { Box } from './Box';

const useStyles = jest
  .spyOn(Unistyles, 'useStyles')
  .mockImplementation(jest.fn());

describe('Box', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default styles', () => {
    useStyles.mockReturnValue({
      styles: {
        layout: jest.fn(() => ({
          width: 100,
          height: 100,
        })),
      },
      theme: lightTheme,
      breakpoint: 'portrait',
    });

    render(
      <Box testID="box" w={100} h={100}>
        <View />
      </Box>,
    );

    const box = screen.getByTestId('box');

    expect(box.props.style).toEqual([{ width: 100, height: 100 }]);
  });
});
