import React from 'react';
import { render } from '@testing-library/react-native';

import TextInput from './text-input';

describe('TextInput', () => {
  it('should render successfully', () => {
    const { root } = render(<TextInput />);
    expect(root).toBeTruthy();
  });
});
