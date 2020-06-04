// Progress.ios.tsx

import React from 'react';
import { ViewStyle, ProgressViewIOS } from 'react-native';
import { ProgressView } from '@react-native-community/progress-view';

interface Props {
  progress: number;
  color: string;
  style: ViewStyle;
}

export default function Progress(props: Props) {
  return (
    <ProgressViewIOS
      progress={props.progress}
      style={props.style}
      progressTintColor={props.color}
    />
  );
}

Progress.defaultProps = {
  color: '#0a7ffb'
}