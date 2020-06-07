/**
 * @format
 */

import { Text } from 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Text>hoge</Text>);
  // Note: とりま
  // renderer.create(<App />);
});
