import React from 'react';
import { render } from '@testing-library/react-native';
import { SignIn } from './SignIn';

describe('SignIn', () => {
  it('renders null', () => {
    const { toJSON } = render(<SignIn />);

    expect(toJSON()).toBeNull();
  });
});
