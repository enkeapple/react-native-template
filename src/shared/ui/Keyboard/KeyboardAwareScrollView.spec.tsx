import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from './KeyboardAwareScrollView';

describe('KeyboardAwareScrollView', () => {
  it('renders correctly with default props', () => {
    render(
      <KeyboardAwareScrollView testID="KeyboardAwareScrollViewComponent">
        <View />
      </KeyboardAwareScrollView>,
    );

    const component = screen.getByTestId('KeyboardAwareScrollViewComponent');
    expect(component.props.showsVerticalScrollIndicator).toBe(false);
    expect(component.props.alwaysBounceVertical).toBe(false);
    expect(component.props.keyboardDismissMode).toBe('none');
    expect(component.props.keyboardShouldPersistTaps).toBe('handled');
    expect(component.props.bottomOffset).toBe(70);
  });

  it('renders correctly with custom props', () => {
    render(
      <KeyboardAwareScrollView
        testID="KeyboardAwareScrollViewComponent"
        showsVerticalScrollIndicator
        alwaysBounceVertical
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="always"
        bottomOffset={100}>
        <View />
      </KeyboardAwareScrollView>,
    );

    const component = screen.getByTestId('KeyboardAwareScrollViewComponent');
    expect(component.props.showsVerticalScrollIndicator).toBe(true);
    expect(component.props.alwaysBounceVertical).toBe(true);
    expect(component.props.keyboardDismissMode).toBe('interactive');
    expect(component.props.keyboardShouldPersistTaps).toBe('always');
    expect(component.props.bottomOffset).toBe(100);
  });
});
