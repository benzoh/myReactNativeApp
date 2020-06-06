// Progress.ios.tsx

import React from 'react';
import { Animated, ViewStyle, StyleSheet } from 'react-native';
import { ProgressView } from '@react-native-community/progress-view';

interface Props {
  progress: number;
  color: string;
  style: ViewStyle;
}

const AnimatedProgressView = Animated.createAnimatedComponent(
  ProgressView,
);

export default function Progress(props: Props) {
  const [progress] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.spring(progress, {
      toValue: props.progress,
      friction: 4,
    }).start();
  }, [props.progress]);

  return (
    <AnimatedProgressView
      progress={progress}
      style={props.style}
      progressTintColor={props.color}
    />
  );
}

Progress.defaultProps = {
  color: '#0a7ffb',
};