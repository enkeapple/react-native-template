/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import * as Unistyles from 'react-native-unistyles';
import {
  FontFamily,
  FontSizes,
  lightColors,
  lightTheme,
  LineHeights,
} from 'themes';
import { Text } from './Text';

const useStyles = jest
  .spyOn(Unistyles, 'useStyles')
  .mockImplementation(jest.fn());

const mockStyles = {
  fontSize: FontSizes.md,
  fontFamily: FontFamily.Regular,
  lineHeight: LineHeights.xl,
};

describe('Text', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default styles', () => {
    useStyles.mockReturnValue({
      styles: {
        layout: jest.fn(() => ({
          ...mockStyles,
          color: lightColors.text_primary,
        })),
      },
      theme: lightTheme,
      breakpoint: 'portrait',
    });

    render(<Text testID="text">Test Text</Text>);

    const text = screen.getByTestId('text');

    expect(text.props.style).toEqual([
      {
        ...mockStyles,
        color: lightColors.text_primary,
      },
    ]);
    expect(text.props.children).toBe('Test Text');
  });

  it('renders correctly with custom styles', () => {
    useStyles.mockReturnValue({
      styles: {
        layout: jest.fn(() => ({
          ...mockStyles,
          fontFamily: FontFamily.Medium,
          color: lightColors.red_dark,
        })),
      },
      theme: lightTheme,
      breakpoint: 'landscape',
    });

    render(
      <Text testID="text" fs={20} lh={30} color="red_dark" ff="Medium">
        Custom Text
      </Text>,
    );

    const text = screen.getByTestId('text');

    expect(text.props.style).toEqual([
      {
        ...mockStyles,
        fontFamily: FontFamily.Medium,
        color: lightColors.red_dark,
      },
    ]);
    expect(text.props.children).toBe('Custom Text');
  });

  it('applies additional style prop', () => {
    useStyles.mockReturnValue({
      styles: {
        layout: jest.fn(() => ({
          ...mockStyles,
          color: lightColors.bg_blue,
        })),
      },
      theme: lightTheme,
      breakpoint: 'portrait',
    });

    render(
      <Text
        testID="text"
        color="bg_blue"
        fs={16}
        lh={24}
        style={{ marginBottom: 10 }}>
        Styled Text
      </Text>,
    );

    const text = screen.getByTestId('text');

    expect(text.props.style).toEqual([
      {
        ...mockStyles,
        color: lightColors.bg_blue,
      },
      { marginBottom: 10 },
    ]);
    expect(text.props.children).toBe('Styled Text');
  });
});
