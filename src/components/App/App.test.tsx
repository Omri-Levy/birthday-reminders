import React from 'react';
import {render} from '@testing-library/react';
import App from './index';

test('renders', () => {
  render(<App/>);

  expect(true).toBe(true);
});
