import React from 'react';
import { render } from '@testing-library/react-native';
import { Dashboard } from './Dashboard';

describe('Dashboard', () => {
  it('renders null', () => {
    const { toJSON } = render(<Dashboard />);

    expect(toJSON()).toBeNull();
  });
});
