import React from 'react';
import { render } from '@testing-library/react-native';
import { KeyboardToolbar } from './KeyboardToolbar';

describe('KeyboardToolbar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default props', () => {
    const { toJSON } = render(<KeyboardToolbar />);

    expect(toJSON()).toBeTruthy();
  });
});
