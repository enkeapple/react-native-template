/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import * as Unistyles from 'react-native-unistyles';
import { Text } from 'react-native';
import { lightTheme } from 'themes';
import { Pressable } from './Pressable';

const useStyles = jest
  .spyOn(Unistyles, 'useStyles')
  .mockImplementation(jest.fn());

describe('Pressable', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default styles', () => {
    useStyles.mockReturnValue({
      styles: {
        layout: jest.fn(() => ({
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          opacity: 1,
        })),
      },
      theme: lightTheme,
      breakpoint: 'portrait',
    });

    render(
      <Pressable testID="pressable">
        <Text>Test Pressable</Text>
      </Pressable>,
    );

    const pressable = screen.getByTestId('pressable');

    expect(pressable.props.style).toEqual({
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      opacity: 1,
    });
    expect(pressable.props.children[0].props.children).toBe('Test Pressable');
  });

  it('renders correctly with custom styles', () => {
    useStyles.mockReturnValue({
      styles: {
        layout: jest.fn(() => ({
          backgroundColor: 'red',
          padding: 20,
          borderRadius: 10,
          opacity: 1,
        })),
      },
      theme: lightTheme,
      breakpoint: 'portrait',
    });

    render(
      <Pressable testID="pressable" style={{ margin: 5 }}>
        <Text>Custom Pressable</Text>
      </Pressable>,
    );

    const pressable = screen.getByTestId('pressable');

    expect(pressable.props.style).toEqual({
      backgroundColor: 'red',
      padding: 20,
      borderRadius: 10,
      margin: 5,
      opacity: 1,
    });
    expect(pressable.props.children[0].props.children).toBe('Custom Pressable');
  });

  it('handles onPress event', () => {
    const handlePress = jest.fn();

    useStyles.mockReturnValue({
      styles: {
        layout: jest.fn(() => ({
          backgroundColor: 'green',
          padding: 15,
          borderRadius: 7,
        })),
      },
      theme: lightTheme,
      breakpoint: 'portrait',
    });

    render(
      <Pressable testID="pressable" onPress={handlePress}>
        <Text>Pressable with onPress</Text>
      </Pressable>,
    );

    const pressable = screen.getByTestId('pressable');

    fireEvent.press(pressable);

    expect(handlePress).toHaveBeenCalled();
  });

  it('applies disabled props', () => {
    useStyles.mockReturnValue({
      styles: {
        layout: jest.fn(() => ({
          backgroundColor: 'yellow',
          padding: 8,
          borderRadius: 4,
        })),
      },
      theme: lightTheme,
      breakpoint: 'portrait',
    });

    render(
      <Pressable testID="pressable" activeOpacity={0.5} disabled>
        <Text>Disabled Pressable</Text>
      </Pressable>,
    );

    const pressable = screen.getByTestId('pressable');

    expect(pressable.props.accessibilityState.disabled).toBe(true);
  });
});
