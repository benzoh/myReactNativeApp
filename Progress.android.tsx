// Progress.android.tsx

import React from 'react';
import { View, ViewStyle } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';

interface Props {
  progress: number;
  color: string;
  style: ViewStyle;
}

export default function Progress(props: Props) {
  return (
    <View style={props.style}>
      <ProgressBar
        styleAttr="Horizontal"
        progress={props.progress}
        indeterminate={false}
        color={props.color}
      />
    </View>
  );
}

Progress.defaultProps = {
  color: '#009988'
}
